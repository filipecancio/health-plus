import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Oops from './pages/Oops';
import Home from "./pages/home";
import Login from './pages/Login';
import Painel from './pages/Painel';
import Laudos from './pages/Laudos';
import Pacientes from './pages/Pacientes';
import Exames from './pages/Exames';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/painel" component={() => <Painel />} />
            <Route exact path="/laudos" component={() => <Laudos />} />
            <Route exact path="/pacientes" component={() => <Pacientes />} />
            <Route exact path="/exames" component={() => <Exames />} />
            <Route exact path="/oops" component={() => <Oops />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;