import { FC } from 'react';

import ListItemText from '@mui/material/ListItemText';

import { ReturnComponentType } from 'shared/types';
import { ControlledRating, CustomList, CustomText, Header } from 'shared/ui';

type NewsLitItemPropsType = {
  listItemTitle?: string;
};

export const NewsListItem: FC<NewsLitItemPropsType> = ({
  listItemTitle = 'hello',
}): ReturnComponentType => {
  return (
    <CustomList>
      <ListItemText
        primary={<Header title={listItemTitle} />}
        secondary={<CustomText text="Mark" />}
      />

      <ControlledRating />
    </CustomList>
  );
};
