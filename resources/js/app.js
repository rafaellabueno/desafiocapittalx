require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./views/Home.js";
import Lista from "./views/Lista.js";
import Editar from "./views/Editar.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename='/capittalx/public'>
        <Switch>
            <Route
                path="/"
                exact
                render={props => (<Home {...props} />)}
            />
            <Route
                path="/home"
                exact
                render={props => (<Home {...props} />)}
            />
            <Route
                path="/lista-admin"
                exact
                render={props => (<Lista {...props} />)}
            />
            <Route
                path="/editar-admin/:rg"
                exact
                render={props => (<Editar {...props} />)}
            />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
);
