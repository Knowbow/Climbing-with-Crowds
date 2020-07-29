import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import GuestContainer from './session/guest_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/guest" component={GuestContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App;