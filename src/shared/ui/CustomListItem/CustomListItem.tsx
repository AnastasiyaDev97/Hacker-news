import ListItem from '@mui/material/ListItem';

import { ReturnComponentType, WithChildrenType } from 'shared/types';

export const CustomListItem = ({ children }: WithChildrenType): ReturnComponentType => (
  <ListItem alignItems="flex-start">{children}</ListItem>
);
