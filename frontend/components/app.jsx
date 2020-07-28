import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <p>WORKING!!!!!</p>
        
        <Route path="/" component={SignupContainer} />
    </div>
)

export default App;