import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseAppProvider } from 'reactfire';

import './index.css';
import App from './components/Unknown/App';
import { UIContextProvider } from './components/Unknown/UIContext';
import reportWebVitals from './reportWebVitals';

const fbConfig = {
  apiKey: 'AIzaSyA--njCClCpuCua3iFIgJQEulcfQ3Ttqjk',
  projectId: 'test-project-2022-06-01',
};

firebase.initializeApp(fbConfig);

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={fbConfig}>
    <React.StrictMode>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
