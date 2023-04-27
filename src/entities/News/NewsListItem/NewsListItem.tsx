import { FC } from 'react';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { ReturnComponentType } from 'shared/types';
import { ControlledRating, CustomListItem, Header } from 'shared/ui';

type NewsListItemPropsType = {
  listItemTitle?: string;
  commentsCount?: number;
  newsDate?: string;
  authorName?: string;
};

export const NewsListItem: FC<NewsListItemPropsType> = ({
  listItemTitle = 'NewsName',
  commentsCount = 20,
  newsDate = '2015-11-18',
  authorName = 'nick',
}): ReturnComponentType => {
  return (
    <CustomListItem>
      <ListItemText
        primary={
          <>
            <Header title={listItemTitle} variant="h6" component="h6" />
          </>
        }
        secondary={
          <>
            <Typography>{authorName}</Typography>
            <Typography component="time" dateTime="2015-11-18">
              {newsDate}
            </Typography>
          </>
        }
      />
      <Box sx={{ padding: '6px 0' }}>
        <ControlledRating />
        <Typography>{commentsCount} comments</Typography>
      </Box>
    </CustomListItem>
  );
};
