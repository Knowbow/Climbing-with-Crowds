import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display =  (
            <div>
            <a href="https://github.com/Knowbow/Climbing-with-Crowds" className="btn">Github</a>
                <Link className="btn" to="/login">Link2</Link>
                <Link className="btn" to="/guest">Link3</Link>
            </div>
        );
    return (
        <footer className="footer-bar">
            <Link className="logo" to="/">Climbing With Friends</Link>
            <div>
                {display}
            </div>
        </footer>
    )
}
