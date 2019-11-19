import React from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/svg/logo_01.svg';
import './Login.css';
import { Button, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: '#b71c1c',
      secondary: {
        main: '#f44336',
      },
    },
  });

const Login = () => <div className="Login">
    <img src={logo} alt="logo" />
    <TextField
        required
        id="filled-basic"
        label="login"
        variant="filled"
    />
    <TextField
        required
        id="filled-basic"
        type="password"
        label="senha"
        variant="filled"
    />
    <Button variant="contained" color="primary">Entrar</Button>
</div>


export default Login;