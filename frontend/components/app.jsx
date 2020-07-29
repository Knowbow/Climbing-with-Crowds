import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import NavbarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import GuestContainer from './session/guest_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

const App = () => (
    <div>
        <Route path="/" component={NavbarContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/guest" component={GuestContainer} />
    </div>
)

export default App;