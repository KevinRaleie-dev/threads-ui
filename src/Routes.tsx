import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Account } from './pages/Account';
import { Nav } from './shared/Nav';
import { NotFound } from './pages/NotFound';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/account/:username" exact component={Account} />
                <Route path="*" exact component={NotFound} />

            {/* localhost:3000/account/:username -> this displays my account, store if i have one, stores i follow or people that follow my store
                localhost:3000/account/settings
            */}
            </Switch>
        </BrowserRouter>
    )
}
