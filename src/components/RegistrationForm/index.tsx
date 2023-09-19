import { useState } from 'react';

import './style.scss';
import { Triumph } from './components/Triumph';
import { Form } from './components/Form';

type RegistrationFormProps = {
  onClose: () => void;
};

export const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [userName, setUserName] = useState<string>('');

  const onSuccess = (name: string) => {
    setIsSuccess(true);
    setUserName(name);
  };

  return (
    <>
      {isSuccess ? (
        <Triumph userName={userName} onClose={onClose}></Triumph>
      ) : (
        <Form onSuccess={onSuccess} />
      )}
    </>
  );
};
