import { FC } from 'react';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { ReturnComponentType } from 'shared/types';
import { ControlledRating, CustomListItem } from 'shared/ui';

type NewsListItemPropsType = {
  newsTitle?: string;
  commentsCount?: number;
  newsDate?: string;
  authorName?: string;
};

export const NewsListItem: FC<NewsListItemPropsType> = ({
  newsTitle = 'NewsName',
  commentsCount = 20,
  newsDate = '2015-11-18',
  authorName = 'nick',
}): ReturnComponentType => {
  return (
    <CustomListItem>
      <ListItemText
        primary={<Typography component="h3">{newsTitle}</Typography>}
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
