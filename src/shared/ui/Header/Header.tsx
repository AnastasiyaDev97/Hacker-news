import { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from 'assets/y18.gif';
import { ReturnComponentType } from 'shared/types';

export const Header: FC = (): ReturnComponentType => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: 'flex' /* { xs: 'none', md: 'flex' } */,
              fontFamily: 'monospace',
              fontWeight: 700,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hacker News
          </Typography>

          {/*   <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hacker News
          </Typography> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
