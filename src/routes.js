import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Oops from './pages/oops/Oops';
import Login from './pages/login/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;