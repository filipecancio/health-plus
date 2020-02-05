import React from 'react';
import Background from '../../assets/jpg/doctor-wallpaper.jpg';
import Logo from "../../assets/svg/logo_01.svg";
import Header from '../../components/Header';

const background = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};

const Home = () =>(
    <div style={background}>
    <Header />
        <h1>Acesse aos laudos de exames da sua clínica<br/> de forma rápida e acessível.</h1>
        <img src={Logo} alt="Logo da compainha Health-Plus" />
    </div>
);

export default Home;