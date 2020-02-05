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

const Painel = () =>(
    <div style={background}>
    <Tool />
    </div>
);

export default Painel;