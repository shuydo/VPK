import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Grid,
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { LOGIN_ROUTE } from '../../common/consts';

const Navbar = () => {
  // const user = true;
  const user = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F50057' }}>
        <Toolbar sx={{ ml: 0 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Voypost
          </Typography>
          <Grid>
            {user ? (
              <Button color="inherit" variant="outlined">
                Exit
              </Button>
            ) : (
              <Link to={LOGIN_ROUTE}>
                <Button sx={{ border: '1px solid white', color: 'white' }}>
                  Login
                </Button>
              </Link>
            )}

            {/* {user ? (
              <Button color="inherit" variant="outlined">
                Exit
              </Button>
            ) : (
                <Button color="inherit" variant="outlined">
                  Login
                </Button>
              </Link>
            )} */}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    // <AppBar position="static" style={{ backgroundColor: '#F50057' }}>
    //   <Toolbar variant="dense">
    //     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" color="inherit" component="div">
    //       Voypost
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
  );
};
export default Navbar;
// import React, { useContext } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import { Button, Grid } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import { LOGIN_ROUTE } from "../utils/consts";
// import { Context } from "../index";
// import { useAuthState } from "react-firebase-hooks/auth";

// const Navbar = () => {
//   const { auth } = useContext(Context);
//   const [user] = useAuthState(auth);

//   return (
//     <AppBar color={"secondary"} position="static">
//       <Toolbar variant={"dense"}>
//         <Grid container justify={"flex-end"}>
//           {user ? (
//             <Button onClick={() => auth.signOut()} variant={"outlined"}>
//               Выйти
//             </Button>
//           ) : (
//             <NavLink to={LOGIN_ROUTE}>
//               <Button variant={"outlined"}>Логин</Button>
//             </NavLink>
//           )}
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
