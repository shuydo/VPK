import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';

import Home from '../Home';
import Login from '../Login';
// import { FirebaseAppProvider,useFirebaseApp } from 'reactfire';

// import Context from '../../../common/context';
// import firebaseConfig from '../../../common/firebaseConfig';
// import firebaseApp from '../../../common/firebaseApp';

import theme from '../../../common/theme';
// import Nav from '../../Navbar';
// import Root from '../Root';
// import { UIContextProvider } from '../UIContext';
// console.log('theme: ', theme);

const App: React.FC = () => {
  const { status, data: sign } = useSigninCheck();

  //   <Router basename={process.env.PUBLIC_URL || '/'}>
  //     <Nav />
  //     <UIContextProvider>
  //       App
  //       <Root />
  //     </UIContextProvider>

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        {status === 'loading' && <div>Loading...</div>}

        {sign?.signedIn ? (
          <>
            <Redirect to="/home" /> <Home />
          </>
        ) : (
          <>
            <Redirect to="/signin" /> <Login />
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
