import URI from 'urijs';

import { builderType, clientAPI } from '../config';

import { getNewsResponseType } from './types';

const newsAPI = clientAPI.enhanceEndpoints({ addTagTypes: ['News'] }).injectEndpoints({
  endpoints: (builder: builderType) => ({
    getNewsIds: builder.query<getNewsResponseType, void>({
      query() {
        const URL = new URI(`beststories.json`);

        return {
          url: URL.toString(),
        };
      },
      providesTags: ['News'],
    }),
  }),
  /*  overrideExisting: false, */
});

export const { useGetNewsIdsQuery } = newsAPI;
