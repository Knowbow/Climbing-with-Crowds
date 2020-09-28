import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Events extends React.Component {
    constructor(props) {
        super(props);

    }


    intro(){
        return (
            <div className="one">
                <h2 className="header">Good Conversations</h2>
                <p className="subheader">They're hard to find.</p>

            </div>
        )
    }

    body(){
        return(
            <div className="events-body-container">
                <div className="events-body"> 
                    <h3>Climbing With Friends is climbing, with company</h3>
                    <p>For two hours, you and company climb at a rock-climbing gym with a host to lead a session. The circumstances are unusual, but that's the point</p>
                    <p>If none of these work for you, you can sign up and we'll email you when next month's times are all up. You can also apply to be a Host!</p>
                </div>
            </div>
        )
    }

    
    cityList(){
        return(
            <div className="city-list-container">
                <div className="city-list-title">
                <p>Jump to your city's climbing times!</p>
                </div>
                <div className='city-list'>
                    <ul className="cities">
                        <li>
                            <Link  to="/events#San Francisco">San Francisco</Link>
                        </li>
                        <li>
                            <Link to="/events#New York">New York</Link>
                        </li>
                        <li>
                            <Link to="/events#Washington DC ">Washington DC</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    citiesEvents(){
        const seed = [
          {
            city_name: "San Francisco",
            event_data: [
              {
                id: 0,
                location_id: 1,
                host_id: 1,
                participant_id: 1,
                date: "Sunday, Aug 23",
                time: "2-4pm",
                location: "Online Zoom",
                url:
                  "https://wiki.d-addicts.com/images/thumb/b/be/Hyori.jpg/201px-Hyori.jpg",
                seats: "3",
              },
              {
                id: 1,
                location_id: 1,
                host_id: 1,
                participant_id: 1,
                date: "Monday, Aug 24",
                time: "4-6pm",
                location: "Online Zoom",
                url: "https://i.mydramalist.com/rxvggc.jpg",
                seats: "MANY",
              },
              {
                id: 2,
                location_id: 1,
                host_id: 1,
                participant_id: 1,
                date: "Tuesday, Aug 25",
                time: "6-8pm",
                location: "Online Zoom",
                url:
                  "https://s.yimg.com/uu/api/res/1.2/SjjOC0P4qIx8rPO7VAQT4Q--~B/aD0zMDA7dz00MDA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_MY/News/YBrandCinemaOnline/7cn_yoosues00.jpg",
                seats: "5",
              },
            ],
          },
          {
            city_name: "New York",
            event_data: [
              {
                id: 3,
                location_id: 2,
                host_id: 2,
                participant_id: 2,
                date: "Saturday, Aug 22",
                time: "3-5pm",
                location: "Online Zoom",
                url:
                  "http://asianwiki.com/images/8/8f/The_Liar_and_His_Lover-teaser2.jpg",
                seats: "MANY",
              },
              {
                id: 4,
                location_id: 2,
                host_id: 2,
                participant_id: 2,
                date: "Saturday, Aug 22",
                time: "3-5pm",
                location: "Sportrock",
                url:
                  "https://i.pinimg.com/736x/ee/87/d6/ee87d6b7a11c0cd9cf8706928e444a68.jpg",
                seats: "4",
              },
            ],
          },
          {
            city_name: "Washington DC ",
            event_data: [
              {
                id: 5,
                location_id: 3,
                host_id: 3,
                participant_id: 3,
                date: "Friday, Aug 7",
                time: "4-6pm",
                location: "24 hour fitness",
                url:
                  "https://img.koreatimes.co.kr/upload/newsV2/images/201902/f70637f418a44964acdcd7d8ad8be285.jpg/dims/resize/740/optimize",
                seats: "MANY",
              },
            ],
          },
        ];
        const renderCities = seed.map(city => {
            return (
                <ul className="cities-container" key={Math.random()} id={city.city_name}>
                    <li className="city">
                        {city.city_name}
                        <span>👉🏽</span>
                    </li>
                    <br/>
                    <li>
                        {this.renderEventDetails(city)}
                    </li>
                </ul>
            )
        })

             
        return (
            <div>
               {renderCities}    
            </div>
            
        )
    }
    renderEventDetails(city) {
        const cityDetails = city.event_data.map(details => {
            let number = details.id;
            return (
                <ul className="event-timeul" key={Math.random()}>
                    <div className="event-box">
                        <div className="event-time">
                            <li>
                                {details.date}
                            </li>
                            <li>
                                {details.time}
                            </li>
                        </div >
                        <li className="events-image">
                            <img src={details.url} />
                        </li>
                        <li className="loc">
                            {details.location}
                        </li>
                        <li className="loc1">{details.seats} SEATS LEFT!</li>
                        
                        <div>

                        </div>
                    </div >
                    <Link to={{
                        pathname: `/events/${details.id}`,
                        state: {
                            id: number
                        }
                    }}>
                        <li className="count-button">count me in</li>
                    </Link>
                </ul>
            )
        })

        return (
            <div className="event-container">
                {cityDetails}
            </div>
        )

    }  
    
    render() {

        return (
          <div>
            <div className="event-pic">
              <img
                className="e-pic"
                src="https://climbcityrock.com/images/homepage-header-2-2020.jpg"
              />
            </div>

            {this.intro()}
            {this.body()}
            {this.cityList()}
            {this.citiesEvents()}
          </div>
        );
    }
}
export default Events;