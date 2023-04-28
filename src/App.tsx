import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import { NewsList } from 'entities';
import { ReturnComponentType } from 'shared/types';
import './App.css';
import { Layout } from 'shared/ui';

const App = (): ReturnComponentType => {
  return (
    <ScopedCssBaseline>
      <CssBaseline />
      <Layout>
        <NewsList />
      </Layout>
    </ScopedCssBaseline>
  );
};

export default App;
