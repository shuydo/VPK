import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
// import { FirebaseAppProvider,useFirebaseApp } from 'reactfire';
// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebaseConfig from '../../../common/firebaseConfig';
// import firebaseApp from '../../../common/firebaseApp';

import theme from '../../../common/theme';
import Nav from '../../Navbar';
import Root from '../Root';
import { UIContextProvider } from '../UIContext';

// const app =
// firebase.initializeApp(firebaseConfig);
// export const Context = createContext<{
//   firebase: any;
//   auth: any;
//   firestore: any;
// } | null>(null);
// const auth = firebase.auth();
// const firestore = firebase.firestore();

const App: React.FC = () => {
  return (
    // <FirebaseAppProvider firebaseApp={firebaseApp}>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <Nav />
        <CssBaseline />
        <UIContextProvider>
          <Root />
        </UIContextProvider>
      </Router>
    </ThemeProvider>
    // </FirebaseAppProvider>
  );
};

export default App;
