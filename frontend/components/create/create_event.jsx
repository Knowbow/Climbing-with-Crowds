import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
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
        
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
      
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
            <p className="p">
              1000s of strangers across the world have climbed together. Create
              an account and you'll be on your way to joining the community!!
            </p>
            <form className="wrapper">
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput("name")}
                placeholder="First name (or nickname)"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.date}
                onChange={this.handleInput("date")}
                placeholder="Date"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.time}
                onChange={this.handleInput("time")}
                placeholder="Time"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.location}
                onChange={this.handleInput("location")}
                placeholder="Location"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleInput("city")}
                placeholder="City"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.intro}
                onChange={this.handleInput("intro")}
                placeholder="Intro"
                className="session-form-sign"
              />
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleInput("description")}
                placeholder="Description of event!"
                className="session-form-sign"
              />
              <Link
                to={{
                  pathname: `/`,
                  
                }}
              >
                <button className="sessionbtn" >
                  Create Event
                </button>
              </Link>
            </form>
          </div>
        );
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