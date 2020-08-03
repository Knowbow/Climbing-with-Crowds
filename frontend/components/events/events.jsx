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
    render() {

        return (
            <>
                <div className="events-container">
                    <img className="home" alt="Friends" src="https://images.squarespace-cdn.com/content/v1/5be4f2c0f793929686b0a305/1567669642144-HELFNPOTBA55RPC2J0FL/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/LM_181130_ClimbFitKirrawee_0086_HIGHres.jpg?format=2500w"
                    />
                </div>
                <div className="frontpage">
                    {this.intro()}
                    {this.body()}
                    {this.cityList()}
                </div>
            </>
        )
    }
}
export default Events;