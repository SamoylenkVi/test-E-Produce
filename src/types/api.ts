export type PostRegisterByEmailRequestBody = {
  name: string;
  login: string;
  phone: string;
  rules1: boolean;
};

export type PostRegisterByEmailResponseSuccess = {
  result: true;
  data: {
    password: string;
  };
};

export type PostRegisterByEmailResponseError = {
  result: false;
  error: Record<'name' | 'login' | 'phone' | 'rules1', string[]>;
};

export type PostRegisterByEmailResponse =
  | PostRegisterByEmailResponseSuccess
  | PostRegisterByEmailResponseError;
