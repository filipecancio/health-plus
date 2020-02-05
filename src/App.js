import React from 'react';
import Routes from './routes';

const app = {
    display: 'grid',
    gridTemplateRows: '100vh',
    gridAutoColumns: '100vw',
    };

const App = (props) => (
    <div style={app}>
        <Routes>
        </Routes>
    </div>
);

export default App;
