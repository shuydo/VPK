import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar'; // "@material-ui/core/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// import { LOGIN_ROUTE } from "../utils/consts";
// import Context from "../utils/context";

const Navbar: React.FC = () => {
  // const { auth } = useContext(Context);
  // const [user] = useAuthState(auth);

  return (
    <AppBar position="static" style={{ backgroundColor: '#F50057' }}>
      <Toolbar variant="dense">
        <Grid container justifyContent="flex-end">
          {/* {user ? (
            <Button onClick={() => auth.signOut()} variant={"outlined"}>
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Логин</Button>
            </NavLink>
          )} */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
//     <Grid container justify={"flex-end"}>
//       user ? (
//    <Button onClick={() => auth.signOut()} variant={"outlined"}>
//   Выйти
// </Button>;
// ) : (
//   <NavLink to={LOGIN_ROUTE}>
//    <Button variant={"outlined"}>Логин</Button>
//  </NavLink>
//       )}
//      </Grid>
export default Navbar;
