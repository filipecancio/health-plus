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
const Exames = () =>(
    <div style={background}>
    <Tool />
    Exames
    </div>
);

export default Exames;