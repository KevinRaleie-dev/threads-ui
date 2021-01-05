import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
