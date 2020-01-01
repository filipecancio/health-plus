import React from 'react';
import Routes from './routes';

const app = {
    display: 'grid',
    gridTemplateRows: '100vh',
    gridAutoColumns: '100vw',
    };

const App = () => (
    <div style={app}>
        <Routes />
    </div>
);

export default App;
