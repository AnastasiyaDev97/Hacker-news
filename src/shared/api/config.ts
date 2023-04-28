import type { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

const CLIENT_API_OPTIONS = {
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
};

export const clientAPI = createApi({
  reducerPath: 'clientAPI',
  baseQuery: fetchBaseQuery({
    ...CLIENT_API_OPTIONS,
    credentials: 'include',
  }),
  tagTypes: ['News', 'Comments'],
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
  'News' | 'Comments',
  'clientAPI'
>;
