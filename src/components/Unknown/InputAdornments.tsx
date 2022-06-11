import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from 'reactfire';

export default function InputAdornments() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passIsVisible, setPassIsVisible] = useState(false);
  const auth = useAuth();

  const changeHandle = (evt: ChangeEvent<HTMLInputElement>): void => {
    switch (evt.target.type) {
      case 'email':
        setMail(evt.target.value);
        break;

      default:
        setPass(evt.target.value);
        break;
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
                // onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {passIsVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button
        style={{
          height: 42,
          fontSize: 15,
          color: '#fff',
          backgroundColor: '#F50057',
          border: 'none',
          borderRadius: 4,
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
        }}
        type="submit"
        onClick={handleSubmit}
      >
        LOGIN
      </button>
      {/* <button type="button" onClick={handleSubmit}>Create Acc</button> */}
    </Box>
  );
}
