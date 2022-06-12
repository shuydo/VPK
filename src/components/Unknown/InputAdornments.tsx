import React, { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from 'reactfire';
import { UIContext } from './UIContext';
// const Login: React.FC = () => {} //export default Login;

const InputAdornments: React.FC = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [isAct, setIsAct] = useState(false);

  const [passIsVisible, setPassIsVisible] = useState(false);
  const { setAlert } = useContext(UIContext);
  const auth = useAuth();

  const changeHandle = (evt: ChangeEvent<HTMLInputElement>): void => {
    switch (evt.target.type) {
      case 'email':
        setMail(evt.target.value);
        break;

      default:
        setPass(evt.target.value);
    }
  };

  const snackHandler = React.useCallback(
    async (messObj) => {
      setAlert(messObj);
    },
    [setAlert],
  );

  const handleSubmit = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    try {
      switch (evt.currentTarget.type) {
        case 'button':
          await auth.createUserWithEmailAndPassword(mail, pass);
          snackHandler({ show: true, severity: 'info', message: 'Created' });
          break;

        default:
          await auth.signInWithEmailAndPassword(mail, pass); // resp.user?.email
          snackHandler({ show: true, severity: 'info', message: 'Logged' });
        // break;
      }
    } catch (err) {
      snackHandler({
        show: true,
        severity: 'error',
        message: (err as Error).message,
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl
        className="filledInput"
        fullWidth
        sx={{ width: 375 }}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
        <FilledInput
          id="filled-adornment-email"
          type="email"
          onChange={changeHandle}
          startAdornment={<InputAdornment position="start" />}
        />
      </FormControl>
      <FormControl
        className="filledInput"
        sx={{ my: 6, width: 375, border: 'none' }}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          value={pass}
          type={passIsVisible ? 'text' : 'password'}
          onChange={changeHandle}
          startAdornment={<InputAdornment position="start" />}
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPassIsVisible(!passIsVisible)}
                edge="end"
              >
                {passIsVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button
        // disabled={{1 ? '' : false}}
        style={{
          height: 42,
          fontSize: 15,
          color: '#fff',
          backgroundColor: '#F50057',
          border: 'none',
          borderRadius: 4,
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
          cursor: 'pointer',
        }}
        type="submit"
        onClick={handleSubmit}
      >
        LOGIN
      </button>

      {/* <button type="button" onClick={handleSubmit}>Create Acc      </button> */}
    </Box>
  );
};

export default InputAdornments;
