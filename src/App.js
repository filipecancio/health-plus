import React from 'react';
import Routes from './routes';
import db from './firebase'

const document = db.collection('health-plus').doc('health-plus');

const Ada = document.get().then((doc) => {
      console.log(doc.id, '=>', doc.data());
    })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

function App() {
        
    return (<div>
        <Routes />
    </div>);
}

export default App;
