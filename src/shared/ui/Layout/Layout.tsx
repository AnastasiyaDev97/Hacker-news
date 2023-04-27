import Container from '@mui/material/Container';

import { Header } from '..';

import { ReturnComponentType, WithChildrenType } from 'shared/types';

export const Layout = ({ children }: WithChildrenType): ReturnComponentType => (
  <>
    <Container fixed /*  maxWidth="sm" */>
      <Header />
      {children}
    </Container>
  </>
);
