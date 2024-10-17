import { PageLayout } from '@logto/experience-components';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import styles from './App.module.scss';
import UsernamePasswordForm from './UsernamePasswordForm';

// eslint-disable-next-line import/no-unassigned-import
import '@logto/experience-sample-toolkit/scss/normalized';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <PageLayout>
              <div className={styles.header}>Sign in to your account</div>
              <UsernamePasswordForm />
              <Toaster position="top-center" />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
