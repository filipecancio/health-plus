import React from 'react';
import Routes from './routes';
import db from './firebase'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        const doc = db.collection('health-plus').doc('health-plus').get()
        this.state = doc
        console.log(this.state)
    }
    
    render() {
        return (<div className="App">
            <Routes />
        </div>)
    }
}

export default App;
