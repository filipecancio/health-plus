import React from 'react';
import Background from '../../assets/jpg/doctor-wallpaper.jpg';

const wallpaper = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
};

const Home = () =>(
    <div style={wallpaper}>
            <h3>Acesse aos laudos de exames da sua clínica de forma rápida e acessível.</h3>
    </div>
);

export default Home;