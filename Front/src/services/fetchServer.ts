import axios, { Method } from 'axios';
import FetchApiError from '../constants/interfaces/FetchApiError';

export const fecthServer = async ({
  method,
  url,
  headers = {},
  data = {},
  params,
}: {
  method: Method | undefined;
  url: string;
  headers?: {};
  data?: {};
  params?: URLSearchParams;
}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (e: any) {
    if (e.response.data) {
      const error: FetchApiError = e.response.data;
      throw new FetchApiError(
        error.status || 500,
        error.message || 'Something went wrong. Please try again.',
      );
    }

    throw new FetchApiError(500, 'Something went wrong. Please try again.');
  }
};
