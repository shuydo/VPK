import React, { ChangeEvent, MouseEvent, useState } from 'react';

import pic from '../../img/hero.jpg';
import vector from '../../img/logo.svg';
import InputAdornments from './InputAdornments';

const Login: React.FC = () => {
  return (
    <div>
      {/* <div style={{ width: 1440, marginLeft: 'auto', marginRight: 'auto' }}> */}
      <div style={{ display: 'flex' }}>
        <img src={pic} alt="" />

        <form
          autoComplete="on"
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={vector} alt="" style={{ marginTop: 100 }} />
          <h1 className="login_title">Login</h1>

          <InputAdornments />
        </form>
      </div>
    </div>
  );
};

export default Login;
