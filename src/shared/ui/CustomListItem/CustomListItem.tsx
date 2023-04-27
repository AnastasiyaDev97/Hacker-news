import ListItem from '@mui/material/ListItem';

import { ReturnComponentType, WithChildrenType } from 'shared/types';

export const CustomListItem = ({ children }: WithChildrenType): ReturnComponentType => (
  <ListItem sx={{ gap: '60px', alignItems: 'center' }}>{children}</ListItem>
);
