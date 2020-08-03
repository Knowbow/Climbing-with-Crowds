import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display =  (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/guest">Demo</Link>
            </div>
        );
    return (
        <header className="footer-bar">
            <Link className="logo" to="/">Climbing With Friends</Link>
            <div>
                {display}
            </div>
        </header>
    )
}
