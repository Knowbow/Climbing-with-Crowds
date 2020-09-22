import React from 'react';

import {createEvent} from '../../actions/event_actions'

class CreateEvent extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            intro: '',
            description: '',
            location:'',
            city:'',
            name:'',
            date: '',
            time: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('hi')
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
      console.log("omg");
      e.preventDefault();
      const formEvent = Object.assign({}, this.state);
      this.props.createEvent(formEvent);
      //onChange={this.handleInput('name')}
    }

    updateState(deets) {
        this.setState({ event_id: deets.event.id })
        this.setState({ toEventPage: true })
    }

    form(){
        return (
            <div className="session-form">
                <h2>Create a climbing session!</h2>
                <p>1000s of strangers across the world have climbed together. Create an account and you'll be on your way to joining the community</p>
                <form className="wrapper">

                    <input
                        type="text"
                        value={this.state.name}
                        
                        placeholder="First name (or nickname)"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.date}
                        
                        placeholder="Date"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.time}
                        
                        placeholder="Time"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.location}
                        onChange={this.handleInput('location')}
                        placeholder="Location"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.city}
                        
                        placeholder="City"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.intro}
                        
                        placeholder="Intro"
                        className="session-form-sign"
                    />
                    <input
                        type="text"
                        value={this.state.description}
                      
                        placeholder="Description of event"
                        className="session-form-sign"
                    />
                    
                    <button className="sessionbtn" onClick={this.handleSubmit}>Create Event</button>
                </form>
            </div>

        )
    }

   

    render(){
        return (
            <div>
                {this.form()}
            </div>
            
        )
    }
}

export default CreateEvent