import ListItem from '@mui/material/ListItem';

import { ReturnComponentType } from 'shared/types/ReturnComponentType';
import { WithChildrenType } from 'shared/types/WithChildrenType';

export const CustomListItem = ({ children }: WithChildrenType): ReturnComponentType => (
  <ListItem alignItems="flex-start">{children}</ListItem>
);
