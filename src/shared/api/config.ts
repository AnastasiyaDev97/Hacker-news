import type { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.MODE === 'development'
    ? 'https://hacker-news.firebaseio.com/v0/'
    : import.meta.env.VITE_BASE_URL;

const CLIENT_API_OPTIONS = {
  baseUrl,
};

export const clientAPI = createApi({
  reducerPath: 'clientAPI',
  baseQuery: fetchBaseQuery({
    ...CLIENT_API_OPTIONS,
    credentials: 'include',
  }),
  tagTypes: ['News'],
  endpoints: () => ({}),
});

export type builderType = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,
  'News',
  'clientAPI'
>;
