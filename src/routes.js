import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Oops from './pages/Oops';
import Home from "./pages/home";
import Login from './pages/Login';
import Painel from './pages/Painel';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home/>}/>
            <Route exact path="/login" component={() => <Login/>}/>
            <Route exact path="/login" component={() => <Painel/>}/>
            <Route exact path="/oops" component={() => <Oops/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;