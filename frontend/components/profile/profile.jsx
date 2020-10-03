import React, { useState, useEffect } from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: localStorage.getItem("first")
        ? JSON.parse(localStorage.getItem("first"))
        : 20,
      second: localStorage.getItem("second")
        ? JSON.parse(localStorage.getItem("second"))
        : 20,
      third: localStorage.getItem("third")
        ? JSON.parse(localStorage.getItem("third"))
        : 20,
      fourth: localStorage.getItem("fourth")
        ? JSON.parse(localStorage.getItem("fourth"))
        : 20,
    };
  }

  intro() {
    return (
      <div className="one">
        <h2 className="header">Welcome back!</h2>
        <p className="subheader">What is happening today?</p>
      </div>
    );
  }

  componentDidMount() {
      
    if (this.state.first == 20 && this.props.location.state) {
      this.setState({
        first: this.props.location.state.id,
      });
      localStorage.setItem(
        "first",
        JSON.stringify(this.props.location.state.id)
      );
    } else if (this.state.second == 20 && this.props.location.state) {
      this.setState({
        second: this.props.location.state.id,
      });
      localStorage.setItem(
        "second",
        JSON.stringify(this.props.location.state.id)
      );
    } else if (this.state.third == 20 && this.props.location.state) {
      this.setState({
        third: this.props.location.state.id,
      });
      localStorage.setItem(
        "third",
        JSON.stringify(this.props.location.state.id)
      );
    } else if (this.state.fourth == 20 && this.props.location.state) {
        
      this.setState({
        fourth: this.props.location.state.id,
      });
      localStorage.setItem(
        "fourth",
        JSON.stringify(this.props.location.state.id)
      );
    }
  }

  body() {
      if (this.state.first == 20){
          return (
            <div className="events-body-container">
              <div className="events-body">
                <h3>Climbing With Friends is climbing, with company</h3>
                <p>You have not signed up for any events!</p>
              </div>
            </div>
          );
      }
      
    return (
      <div className="events-body-container">
        <div className="events-body">
          <h3>Climbing With Friends is climbing, with company</h3>
          <p>
            Here are the following events you have signed up for!
          </p>
          
        </div>
      </div>
    );
  }

  eventData(eventID) {
      
    const seed = [
      {
        city_name: "San Francisco",
        id: 0,
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
        id: 2,
        name: "Yoo",
        date: "Tuesday, Aug 25",
        time: "6-8PM",
        location: "Online Zoom",
        seats: "5",
      },
      {
        city_name: "New York",
        id: 3,
        name: "Joy",
        date: "Saturday, Aug 22",
        time: "3-5PM",
        location: "Online Zoom",
        seats: "many",
      },
      {
        city_name: "New York",
        id: 4,
        name: "Eunji",
        date: "Saturday, Aug 22",
        time: "3-5pm",
        location: "Sportrock",
        seats: "4",
      },
      {
        city_name: "Washington DC ",
        id: 5,
        name: "Jongkook",
        date: "Friday, Aug 7",
        time: "4-6pm",
        location: "24 hour fitness",
        seats: "many",
      },
    ];
    
    if (eventID != 20 && eventID != null) {
       
    return (
        
      <div className="event-data-container1">
        <ul>
          <li className="event-card-host">
            {seed[eventID].name}'s climbing event
          </li>
          
          <li className="event-card-datetime">📅 {seed[eventID].date}</li>
          <li className="event-card-datetime">⏰ {seed[eventID].time}</li>
          <li className="event-card-location">📍 {seed[eventID].location}</li>
          <li className="event-card-location">🗺 {seed[eventID].city_name}</li>
          <li className="event-card-location">
            🗣 https://climbing-with-crowds.herokuapp.com/#/events/
          </li>
          
        </ul>
      </div>
    );}
    else {
        return <div className="event-data-container2"></div>;
    }
  }

  events() {
    if (this.props.location.state || this.state.first != 20) {
      return (
        <div className="events-body-container">
          <div className="events-body">{this.state.first}</div>
        </div>
      );
    } else {
      return <div>Hi</div>;
    }
  }

  render() {
      
    return (
      <>
        <div className="event-pic1">
          <img
            className="e-pic1"
            src="https://climbcityrock.com/images/homepage-header-2-2020.jpg"
          />
        </div>
        {this.intro()}
        {this.body()}
        <div className='profileEvents'>
          {this.eventData(this.state.first)}
          {this.eventData(this.state.second)}
          {this.eventData(this.state.third)}
          {this.eventData(this.state.fourth)}
        </div>
      </>
    );
  }
}

export default Profile;