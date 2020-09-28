import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = (
      <div>
        <a
          href="https://github.com/Knowbow/Climbing-with-Crowds"
          className="btn"
        >
          Github
        </a>
        <a href="https://www.linkedin.com/in/tony-wu-76769286/" className="btn">
          Linkedin
        </a>
        <a href="https://knowbow.github.io/" className="btn">
          Personal Site
        </a>
      </div>
    );
    return (
        <footer className="footer-bar">
            
            
            <div className="links-container">
                {display}
            </div>
            <div className="footer-text">
                <p className="footer-info">
                    Climbing with Crowds is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
                </p>
                <p className="footer-info">
                    We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
                </p>
            </div>
        </footer>
    )
}
