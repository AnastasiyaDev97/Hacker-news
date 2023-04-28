import { FC } from 'react';

import Divider from '@mui/material/Divider';

import { NewsListItem } from '..';

import { ReturnComponentType } from 'shared/types';
import { CustomList } from 'shared/ui';

export const NewsList: FC = (): ReturnComponentType => {
  return (
    <CustomList>
      <NewsListItem />
      <Divider />
    </CustomList>
  );
};
