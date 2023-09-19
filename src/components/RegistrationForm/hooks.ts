import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import { schemaRegistration } from './constants';
import { RegistrationFormValues } from './types';
import { prepareErrors } from './helpers';
import { postRegisterByEmail } from '../../api/postRegisterByEmail';

type useRegistrationFormParams = {
  onSuccess: (name: string) => void;
};

export const useRegistrationForm = ({
  onSuccess,
}: useRegistrationFormParams) => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setError,
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(schemaRegistration),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formValues: RegistrationFormValues) => {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);

      const { data } = await postRegisterByEmail(formValues);

      if (data.result) {
        const { name } = getValues();
        onSuccess(name);
      } else {
        const errors = prepareErrors(data);
        errors.forEach(({ name, error, config }) =>
          setError(name, error, config),
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    errors,
    isLoading,
    onSubmit: handleSubmit(onSubmit),
  };
};
