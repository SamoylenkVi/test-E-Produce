import { PostRegisterByEmailResponseError, Entries } from '../../types';

export const prepareErrors = (
  errorResponse: PostRegisterByEmailResponseError,
) => {
  const errors = Object.entries(errorResponse.error) as Entries<
    PostRegisterByEmailResponseError['error']
  >;
  return errors.map(([name, [message]], index) => ({
    name,
    error: {
      message,
    },
    config: {
      shouldFocus: index === 0,
    },
  }));
};
