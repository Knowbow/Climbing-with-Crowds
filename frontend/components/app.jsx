import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import GuestContainer from './session/guest_container';
import HomeContainer from './home_page/home_container';
import FooterContainer from './footer/footer_container';
import EventsContainer from './events/events_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/guest" component={GuestContainer} />
            <Route exact path="/events" component={EventsContainer} />
            <Redirect to="/" />
        </Switch>
        <FooterContainer />
    </div>
)

export default App;