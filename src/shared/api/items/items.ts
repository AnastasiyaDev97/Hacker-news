import URI from 'urijs';

import { builderType, clientAPI } from '../config';
import { CommentType, NewsType } from '../models';

const itemsAPI = clientAPI.injectEndpoints({
  endpoints: (builder: builderType) => ({
    getItemById: builder.query<NewsType | CommentType, { itemId: number }>({
      query(itemId) {
        const URL = new URI(`item/${itemId}.json`);

        return {
          url: URL.toString(),
        };
      },
    }),
  }),
});

export const { useGetItemByIdQuery } = itemsAPI;
