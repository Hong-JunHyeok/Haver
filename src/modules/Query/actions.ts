import { AxiosError, AxiosResponse } from 'axios';

export const QUERY_START = 'query/QUERY_START' as const;
export const QUERY_SUCCESS = 'query/QUERY_SUCCESS' as const;
export const QUERY_ERROR = 'query/QUERY_ERROR' as const;

export const queryStart = () => ({
  type: QUERY_START,
});
export const querySuccess = (documents: AxiosResponse) => ({
  type: QUERY_SUCCESS,
  payload: documents,
});
export const queryError = (error: AxiosError) => ({
  type: QUERY_ERROR,
  payload: error,
});

export type QueryActions =
  | ReturnType<typeof queryStart>
  | ReturnType<typeof querySuccess>
  | ReturnType<typeof queryError>;
