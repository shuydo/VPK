import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import AuthenticatedLayout from '../AuthenticatedLayout';
import GuestLayout from '../GuestLayout';
// import HomeScreen from '../HomeScreen';
// import NotFoundScreen from '../NotFoundScreen';
// import SignInScreen from '../../Auth/SignInScreen';

// import { Component } from 'react';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../../common/consts';
// import { privateRoutes, publicRoutes } from '../../../common/routes';
import Login from '../../Login';
import Chat from '../../Chat';

const Root: React.FC = () => {
  // const user = true;
  const user = false;

  // const {
  //   data: user,
  //   // hasEmitted,
  //   firstValuePromise,
  // } = useUser();
  // const [isUserLoaded, setIsUserLoaded] = useState(false);
  // const isLogged = !!user;
  // useEffect(() => {
  //   firstValuePromise.then(() => setIsUserLoaded(true));
  // }, [firstValuePromise, setIsUserLoaded]);

  // doesn't always work, but suddenly works when subscribing to `firstValuePromise`
  // thus we use `isUserLoaded` below
  // if (!hasEmitted) {
  //   return null;
  // }

  // if (!isUserLoaded) {
  //   return null;
  // }

  // if (isLogged) {
  if (user) {
    return (
      <AuthenticatedLayout>
        <Switch>
          {/* {privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact={true} />
          ))} */}
          <Route exact path="/chat" component={Chat} />
          <Redirect to={CHAT_ROUTE} />
          {/* <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={() => <Redirect to="/" />} />
          <Route path="*" component={NotFoundScreen} /> */}
        </Switch>
      </AuthenticatedLayout>
    );
  }

  return (
    <GuestLayout>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to={LOGIN_ROUTE} />
      </Switch>
    </GuestLayout>
  );
};

export default Root;

/* {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        <Redirect to={LOGIN_ROUTE} /> */
/* <Route exact path="/login" component={SignInScreen} />
        <Route path="*" component={NotFoundScreen} /> */
