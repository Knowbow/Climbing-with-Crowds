import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Events extends React.Component {
    constructor(props) {
        super(props);

    }


    intro(){
        return (
            <div className="events-title">
                <h2>Good Conversations</h2>
                <p>They're hard to find.</p>

            </div>
        )
    }

    body(){
        return(
            <div className="events-body-container">
                <div className="events-body"> 
                    <h3>Climbing With Friends is climbing, with company</h3>
                    <p>For two hours, you and company climb at a rock-climbing gym with a host to lead a session. The circumstances are unusual, but that's the point</p>
                    <p>If none of these work for you, you can sign up and we'll email you when next month's tea times are all up. You can also apply to be a Host!</p>
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
                            <Link to="/events#San Francisco">San Francisco</Link>

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
            {city_name: "San Francisco",
            event_data:[
                {
                    id: 0,
                    location_id: 1,
                    host_id: 1,
                    participant_id: 1,
                    date: "08/08/2020",
                    time: "2:00pm",
                    location: "Online Zoom"
                }
                ]},
            {
                city_name: "New York",
                event_data: [
                    {
                        id: 1,
                        location_id: 2,
                        host_id: 2,
                        participant_id: 2,
                        date: "08/09/2020",
                        time: "3:00pm",
                        location: "Sportrock"
                    }
                ]
            },
            {
                city_name: "Washington DC ",
                event_data: [
                    {
                        id: 2,
                        location_id: 3,
                        host_id: 3,
                        participant_id: 3,
                        date: "08/10/2020",
                        time: "4:00pm",
                        location: "24 hour fitness"
                    }
                ]
            },

        ]
        const renderCities = seed.map(city => {
            return (
                <ul className="cities-container" key={city.city_name.length} id={city.city_name}>
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
                <ul className="event-timeul" key={city.city_name.length}>
                    <div className="event-box">
                        <div className="event-time">
                            <li>
                                {details.date}
                            </li>
                            <li>
                                {details.time}
                            </li>
                        </div >
                        <li className="loc">
                            {details.location}
                        </li>
                        <Link to={{
                            pathname: `/events/${details.id}`,
                            state: {
                                id: number
                            }
                        }}>
                            <li className="count-button">count me in</li>
                        </Link>
                        <div>

                        </div>
                    </div >
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
            <div className="events-container">
                <div className="events-pic">
                    <img className="event-pic" alt="Friends" src="https://gripped.com/wp-content/uploads/2018/02/Climbing-Gym3.jpeg"
                    />
                </div>
                
                    {this.intro()}
                    {this.body()}
                    {this.cityList()}
                    {this.citiesEvents()}
                    <h3 id="here">HIYA</h3>
                
            </div>
        )
    }
}
export default Events;