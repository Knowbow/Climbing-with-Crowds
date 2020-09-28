import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Event extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
       // let id = this.props.requestEvent(1);
        //console.log(this.props.location.state.id)
    }

    intro() {
        
        return (
            <div className="events-title">
                <h2>Good Conversations</h2>
                <p>They're hard to find.</p>

            </div>
        )
    }

    body() {
        return (
            <div className="events-body-container">
                <div className="events-body">
                    <h3>Climbing With Friends is climbing, with company</h3>
                    <p>For two hours, you and company climb at a rock-climbing gym with a host to lead a session. The circumstances are unusual, but that's the point</p>
                    <p>If none of these work for you, you can sign up and we'll email you when next month's climb times are all up. You can also apply to be a Host!</p>
                </div>
            </div>
        )
    }

    signUpButton() {
        return (
          <div>
            <Link
              to={{
                pathname: `/profile`,
                state: {
                  id: this.props.location.state.id,
                },
              }}
            >
              <button className="event-signup">SIGN ME UP</button>
            </Link>
          </div>
        );
        
    }
    
    eventData(){
        const seed = [
          {
            city_name: "San Francisco",
            id: 1,
            name: "Hyori",
            date: "Sunday, Aug 23",
            time: "2-4PM",
            location: "Online Zoom",
            seats: "3",
          },
          {
            city_name: "San Francisco",
            id: 1,
            name: "Rain",
            date: "Monday, Aug 24",
            time: "4-6PM",
            location: "Online Zoom",
            seats: "many",
          },
          {
            city_name: "San Francisco",
            id: 1,
            name: "Yoo",
            date: "Tuesday, Aug 25",
            time: "6-8PM",
            location: "Online Zoom",
            seats: "5",
          },
          {
            city_name: "New York",
            id: 1,
            name: "Joy",
            date: "Saturday, Aug 22",
            time: "3-5PM",
            location: "Online Zoom",
            seats: "many",
          },
          {
            city_name: "New York",
            id: 2,
            name: "Eunji",
            date: "Saturday, Aug 22",
            time: "3-5pm",
            location: "Sportrock",
            seats: "4",
          },
          {
            city_name: "Washington DC ",
            id: 3,
            name: "Jongkook",
            date: "Friday, Aug 7",
            time: "4-6pm",
            location: "24 hour fitness",
            seats: "many",
          },
        ];
        return (
          <div className="event-data-container">
            <ul>
              <li className="event-card-host">
                Join {seed[this.props.location.state.id].name} For Climbing
              </li>
              <li className="event-card-datetime">
                📅 {seed[this.props.location.state.id].date}
              </li>
              <li className="event-card-datetime">
                ⏰ {seed[this.props.location.state.id].time}
              </li>
              <li className="event-card-location">
                📍 {seed[this.props.location.state.id].location}
              </li>
              <li className="event-card-location">
                🗺 {seed[this.props.location.state.id].city_name}
              </li>
              <li className="event-card-location">
                🗣 https://climbing-with-crowds.herokuapp.com/#/events/
              </li>
              <li className="event-card-seats">
                There are {seed[this.props.location.state.id].seats} seats left!
              </li>
            </ul>
          </div>
        );
    }

    hostInfo(){
        const seed = [
            {
                name: "Hyori",
                url: "https://wiki.d-addicts.com/images/thumb/b/be/Hyori.jpg/201px-Hyori.jpg"
            },
            {
                name: "Rain",
                url: "https://i.mydramalist.com/rxvggc.jpg"

            },
            {
                name: "Yoo",
                url: "https://s.yimg.com/uu/api/res/1.2/SjjOC0P4qIx8rPO7VAQT4Q--~B/aD0zMDA7dz00MDA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_MY/News/YBrandCinemaOnline/7cn_yoosues00.jpg"
            },
            {
                name: "Joy",
                url: "http://asianwiki.com/images/8/8f/The_Liar_and_His_Lover-teaser2.jpg"
            },
            {
                name: "Eunji",
                url: "https://i.pinimg.com/736x/ee/87/d6/ee87d6b7a11c0cd9cf8706928e444a68.jpg"
            },
            {
                name: "Jongkook",
                url: "https://img.koreatimes.co.kr/upload/newsV2/images/201902/f70637f418a44964acdcd7d8ad8be285.jpg/dims/resize/740/optimize"
            }

        ]
        return (
            <div className="event-host-container">
                <ul>
                    <li className="host-title">Meet your host, {seed[this.props.location.state.id].name}.</li>
                    <li className="event-blurb">(It'll be helpful to know what they look like when you're looking for a group of confused strangers at the gym).</li>
                    <li ><img className="host-image" src={seed[this.props.location.state.id].url}/></li>
                    <br />
                    <li className="event-bio">
                        <p>W- “What’s up?!” - “Oh, not too much.” *End of conversation* We walk by hundreds of human beings every day but know so little about each of them. Let’s grab some and get to know each other… just because we can!</p>
                        <h1>What might we talk about?</h1>
                        <p>What has been the highlight our your last month? Last year? What wacky theories do you have about the world? What is your favorite place in the world? What is your spirit-animal? If you had a billion dollars and didn’t have to work, what would you do? What is love? What was the most influential year of your life? What’s important to you? If you had a time-machine, what is one piece of advice you would pass along to your 18-year-old self? What makes you happy? But most importantly, what’s been on your mind recently?</p>

                    </li>
                </ul>
            </div>
        );
    }
    

    render() {

        return (
            
            <div className="event-bg">  
                <div className="event-container1">
                    <div className="events-pic">
                        
                    </div>
                    
                    
                    <div className="event-left">
                        {this.eventData()}
                        {this.signUpButton()}
                    </div>
                    <div className="event-right">
                        {this.hostInfo()}
                    </div>

                </div>
            </div>
        )
    }
    
} 
export default Event;


function Map(props) {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{
                lat: 40.7591704, lng: -74.0392709
            }} />
    )
}

