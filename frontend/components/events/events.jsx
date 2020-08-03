import React from 'react';

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
            <div className="events-body">
                <h3>Climbing With Friends is climbing, with company</h3>
                <p>For two hours, you and company climb at a rock-climbing gym with a host to lead a session. The circumstances are unusual, but that's the point</p>
                <p>If none of these work for you, you can sign up and we'll email you when next month's tea times are all up. You can also apply to be a Host!</p>
            </div>
        )
    }

    cityList(){
        return(
            <div className="city-list">
                <p>Jump to your city's climbing times!</p>
                <div className='cities-list'>
                    <ul>
                        <li>
                            San Francisco
                        </li>
                        <li>
                            New York City
                        </li>
                        <li>
                            Washington DC
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
                    id: 1,
                    location_id: 1,
                    host_id: 1,
                    participant_id: 1,
                    date: "08/08/2020",
                    time: "2:00pm"
                }
                ]},
            {
                city_name: "New York",
                event_data: [
                    {
                        id: 2,
                        location_id: 2,
                        host_id: 2,
                        participant_id: 2,
                        date: "08/09/2020",
                        time: "3:00pm"
                    }
                ]
            },
            {
                city_name: "Washington DC ",
                event_data: [
                    {
                        id: 3,
                        location_id: 3,
                        host_id: 3,
                        participant_id: 3,
                        date: "08/10/2020",
                        time: "4:00pm"
                    }
                ]
            },

        ]
        const renderCities = seed.map(city => {
            return (
                <ul className="eventIndex-container" key={city.city_name.length}>
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
                    <img className="home" alt="Friends" src="https://images.squarespace-cdn.com/content/v1/5be4f2c0f793929686b0a305/1567669642144-HELFNPOTBA55RPC2J0FL/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/LM_181130_ClimbFitKirrawee_0086_HIGHres.jpg?format=2500w"
                    />
                </div>
                <div className="frontpage">
                    {this.intro()}
                    {this.body()}
                    {this.cityList()}
                    {this.citiesEvents()}
                </div>
            </div>
        )
    }
}
export default Events;