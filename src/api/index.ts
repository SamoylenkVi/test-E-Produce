import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

const BASE_URL = 'https://promo-test.emlsdr.ru/backend/api';
const TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.response.use(
    response => response,
    (error: AxiosError<{ message: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.message);
      } else {
        toast.warn('Ой! Что-то пошло не так');
      }

      throw error;
    },
  );

  return api;
};

export const api = createApi();
