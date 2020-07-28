import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import NavbarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <p>WORKING!!!!!</p>
        
        <Route path="/signup" component={SignupContainer} />
        <Route path="/" component={NavbarContainer} />
    </div>
)

export default App;