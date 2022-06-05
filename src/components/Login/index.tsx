import React from 'react';

// const Login = () => {
//   return <div>Login</div>;
// };

// export default Login;

// import React, { useContext } from "react";
import { Box, Button, Container, Grid } from '@mui/material';
// import Box from '@mui/material';
import { Context } from '../../index';
// import firebase from 'firebase';

const Login = () => {
  const email = '';
  const pass = '';
  // const { auth } = useContext(Context);

  // const login = async () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const { user } = await auth.signInWithPopup(provider);
  //   console.log(user);
  // };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
      >
        <Grid
          style={{ width: 400, height: 100, background: 'lightgray' }}
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <input
            type="email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            value={pass}
            // onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
          <Box p="5">
            <Button variant="outlined">Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

// /* <Button onClick={login} variant={'outlined'}> */
