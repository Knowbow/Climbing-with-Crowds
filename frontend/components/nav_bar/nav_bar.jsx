import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="nav-right">
            <Link className="btn" to="/">Welcome {currentUser.name}!</Link>
            <Link className="btn" to="/create">Hosting</Link>
            <Link className="btn" to="/" onClick={logout}>Sign Out</Link>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/guest">Demo</Link>
            </div>
        );
    return (
        <header className="nav-bar">
            <img className="Climb-logo" src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/realpeople-1d5fb20324228744e992569f082415977c4b3799ef7b14cc5922c2dade18f97c.png"/>
            <Link className="logo" to="/">Climbing With Friends</Link>
            <div>
                {display}
            </div>
        </header>
    )
