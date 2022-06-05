import React, { createContext } from 'react';

import ReactDOM from 'react-dom';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../src/common/firebaseConfig';

import reportWebVitals from './reportWebVitals';
import App from './components/Unknown/App';

firebase.initializeApp(firebaseConfig);
export const Context = createContext<{
  firebase: any;
  auth: any;
  firestore: any;
} | null>(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
