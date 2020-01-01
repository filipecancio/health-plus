import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Oops from './pages/Oops';
import Home from "./pages/home";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home/>}/>
            <Route exact path="/oops" component={() => <Oops/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;