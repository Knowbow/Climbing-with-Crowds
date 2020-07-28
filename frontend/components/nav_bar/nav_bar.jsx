import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/login">Demo</Link>
            </div>
        );
    return (
        <header className="nav-bar">
            <Link className="logo" to="/">Climbing With Friends</Link>
            <div>
                {display}
            </div>
        </header>
    )
}