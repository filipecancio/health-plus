import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Oops from './pages/oops/Oops';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Oops/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;