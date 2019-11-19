import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Oops from './pages/oops/Oops';
import Login from './pages/login/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login/>}/>
            <Route exact path="/oops" component={() => <Oops/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;