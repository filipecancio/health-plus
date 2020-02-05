import React from 'react';
import Tool from '../../components/Tool';

const background = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};
const Pacientes = () =>(
    <div style={background}>
    <Tool />
    Pacientes
    </div>
);

export default Pacientes;