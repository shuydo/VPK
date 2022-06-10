import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useAuth } from 'reactfire';

import pic from '../../img/hero.jpg';
import vector from '../../img/logo.svg';
import InputAdornments from './InputAdornments';

const Login: React.FC = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const auth = useAuth();

  const changeHandle = (evt: ChangeEvent<HTMLInputElement>): void => {
    switch (evt.target.type) {
      case 'email':
        setMail(evt.target.value);
        break;

      case 'password':
        setPass(evt.target.value);
        break;

      default:
    }
  };

  const handleSubmit = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    try {
      switch (evt.currentTarget.type) {
        case 'button':
          await auth.createUserWithEmailAndPassword(mail, pass);
          alert(`Account Created`);
          break;

        default: {
          const resp = await auth.signInWithEmailAndPassword(mail, pass);
          alert(`Logged In: ${resp.user?.email}`);
          break;
        }
      }
    } catch (err) {
      alert(`ERROR: ${(err as Error).message}`);
    }
  };

  return (
    <div style={{ width: 1440, marginLeft: 'auto', marginRight: 'auto' }}>
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

          <input type="email" placeholder="Email" onChange={changeHandle} />
          <input
            type="password"
            placeholder="Password"
            onChange={changeHandle}
          />
          <button type="submit" onClick={handleSubmit}>
            LOGIN
          </button>
          <InputAdornments />
          {/* <button type="button" onClick={handleSubmit}>
            Create Acc
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
