import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);
    }
    
    render(){
        return (
            <>
                <h1>The time is {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
                </h1>
                <h1>
                    The date is {this.state.time.toDateString()}
                </h1>
            </>
        );
    }

    componentDidMount() {   // invoked immediately after a component is mounted (inserted into the tree)
        this.interval = setInterval(
            this.tick, 1000);
    }

    componentWillUnmount() { // nvoked immediately before a component is unmounted and destroyed
        clearHandle(this.interval);
        this.interval = 0;
    }

    tick(){
          this.setState({time: new Date()})
    }
}

export default Clock;