import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ChangePassword from './pages/ChangePassword';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Account } from './pages/Account';
import { Nav } from './shared/Nav';
import { NotFound } from './pages/NotFound';
import { Browse } from './pages/Browse';
import { Drag } from './pages/Drag';
import { useMeQuery } from './generated/graphql';
import { Search } from './pages/Search';

export const Routes = () => {
    const {data} = useMeQuery()
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" exact>
                    { data?.me ? <Redirect to="/browse" /> : <Home /> }
                </Route>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/account/:username" exact component={Account} />
                <Route path="/change-password/:token" exact>
                    { data?.me ? <Redirect to="/browse" /> : <ChangePassword />}
                </Route>
                <Route path="/browse" exact component={Browse} />
                <Route path="/drag-drop" exact component={Drag} />
                <Route path="/search" exact component={Search} />
                <Route path="*" exact component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
