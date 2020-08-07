import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){

        return (
            <>
                <div className="home-pic">
                    <img className="r-pic" src="https://www.visitrenotahoe.com/wp-content/uploads/2019/10/The-Outbound-Rock-Climbing-HEADER-1920x675.jpg" />
                </div>
                <div className="one">
                    <p className="header">Everyone is interesting</p>
                    <p className="subheader">But you don't discover that when you're staring at a screen.</p>
                    <Link to='/events' className="event-link">Let's Climb!</Link>
                </div>
                <div className="two">
                    <div className="two-one">
                        <p className="two-header">Show up for climbing</p>
                        <p className="two-body">You and a few others join a host at a gym.</p>
                    </div>
                    <div className="two-two">
                        <p className="two-header">Have a real conversation</p>
                        <p className="two-body">You talk for two hours about anything.</p>
                    </div>
                    <div className="two-three">
                        <p className="two-header">See what happens</p>
                        <p className="two-body">That's it. No strings attached.</p>
                    </div>
                </div>
                <div className="three">
                    <p className="three-intro">So why are thousands of people doing it?</p>

                    <div className="three-one">
                        <img className="three-img" src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/realpeople-1d5fb20324228744e992569f082415977c4b3799ef7b14cc5922c2dade18f97c.png" />
                        <div className="three-body">
                            <p className="three-header">It's weird.</p>
                            <p className="three-body">Everyone at climbing is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
                        </div>
                    </div>

                    <div className="three-two">
                        <div className="three-body">
                            <p className="three-header">We won't meet otherwise.</p>
                            <p className="three-body">In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity.</p>
                        </div>
                        <img className="three-img" src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/nevermeet-55361a98c59cda3fced04c6234e80553c4ed3858c1028008e6fa3642185d57b9.png" />
                    </div>

                    <div className="three-three">
                        <img className="three-img" src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/highfive-e7a173c8a773070abd084deeac2eb53919a70990425599ed5e7164dc143d45c6.png" />
                        <div className="three-body">
                            <p className="three-header">Your hands are made for high fiving!</p>
                            <p className="three-body">And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Climbing has real humans! #nofilter!</p>
                        </div>
                    </div>
                </div>
                <div className="four">
                    <div className="four-content">
                        <p className="splash-four">Actually climb with people</p>
                        <Link to='/events' className="event-link">Let's join!</Link>
                    </div>
                </div>
            </>
        )        
    }
}
export default Home;