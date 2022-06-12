import { Box /* ,Container */ } from '@mui/material';
import React /* , { ChangeEvent, MouseEvent, useState } */ from 'react';

import pic from '../../img/hero.jpg';
import vector from '../../img/logo.svg';
import InputAdornments from './InputAdornments';

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        width: { md: 1440 },
        display: 'flex',
        mx: 'auto',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '50%', display: { xs: 'none', md: 'block' } }}>
        <img src={pic} alt="" />
      </Box>

      <Box sx={{ width: { xs: '50%', md: '100%' } }}>
        <form
          autoComplete="on"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={vector} alt="" style={{ marginTop: 100 }} />
          <h1 className="login_title">Login</h1>

          <InputAdornments />
        </form>
      </Box>
    </Box>
  );
};

export default Login;
