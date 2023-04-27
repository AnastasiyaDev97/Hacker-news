import List from '@mui/material/List';

import { ReturnComponentType, WithChildrenType } from 'shared/types';

export const CustomList = ({ children }: WithChildrenType): ReturnComponentType => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {children}
    </List>
  );
};
