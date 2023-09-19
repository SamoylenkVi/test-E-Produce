import qs from 'qs';

import { api } from '.';
import {
  PostRegisterByEmailRequestBody,
  PostRegisterByEmailResponse,
} from '../types';

export const postRegisterByEmail = async (
  data: PostRegisterByEmailRequestBody,
) =>
  await api.post<PostRegisterByEmailResponse>(
    '/registerByEmail',
    qs.stringify(data),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
