import Container from '@mui/material/Container';

import { ReturnComponentType, WithChildrenType } from 'shared/types';

export const Layout = ({ children }: WithChildrenType): ReturnComponentType => (
  <Container>{children}</Container>
);
