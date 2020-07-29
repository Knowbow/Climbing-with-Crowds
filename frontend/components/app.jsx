import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import NavbarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import GuestContainer from './session/guest_container';

const App = () => (
    <div>
        <Route path="/" component={NavbarContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/guest" component={GuestContainer} />
    </div>
)

export default App;