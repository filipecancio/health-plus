import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Label, Control, Input, Button } from 'rbx';
import Logo from "../../assets/svg/logo_01.svg";

const background = {
    backgroundColor: "radial-gradient(#EBEBEB 0%, #EBEBEB    100%)",
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};
const buttons = {
    width: "100%",
    margin: "10px",
    justifyContent: 'space-between',
};

const Login = () => (
    <div style={background}>
        <img src={Logo} alt="Logo da compainha Health-Plus" />
        <Field>
            <Label>Email</Label>
            <Control>
                <Input type="email" placeholder="e.g. alexsmith@gmail.com" />
            </Control>
        </Field>
        <Field>
            <Label>Senha</Label>
            <Control>
                <Input type="password" placeholder="*****" />
            </Control>
        </Field>
        <div style={buttons}>
            <Link to="/"><Button color={"clean"}>Retornar</Button></Link>
            <Link to="/painel"><Button color={"danger"}>Entrar</Button></Link>
        </div>
    </div>
);

export default Login;