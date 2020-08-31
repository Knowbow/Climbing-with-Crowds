import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <Link className="btn" to="/">Welcome!</Link>
            <Link className="btn" to="/create">Hosting</Link>
            <Link to='/events' className="btn">Climbing Times</Link>
            <Link className="btn" to="/" onClick={logout}>Sign Out</Link>

        </div>
    ) : (
            <div>
                <Link to='/events' className="btn">Climbing Times</Link>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/guest">Demo</Link>
            </div>
        );
    return (
        <header className="nav-bar">
            
            <div className="left-nav">
            <Link className="logo" to="/"><img className="logo-pic" src="https://i.imgur.com/JdHqSAg.png" /> Climbing With Friends</Link>
            </div>
            <div className="nav-right">
                {display}
            </div>
        </header>
    )
}
