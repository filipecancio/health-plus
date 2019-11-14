import React from 'react';
import TextField from '@material-ui/core/TextField';

const Login = () => <div>
    <TextField
        required
        id="filled-basic"
        label="login"
        variant="filled"
    />
    <TextField
        required
        id="filled-basic"
        label="senha"
        variant="filled"
    />
</div>


export default Login;