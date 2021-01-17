import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Nav } from './shared/Nav';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
