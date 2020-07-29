import React from 'react';

class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'eunji',
            email: 'bee',
            password: 'bbbbbb',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        
        //e.preventDefault();
        const user = Object.assign({}, this.state);
        
        this.props.login(user)
        // this.props.createNewUser(this.state)
         .then(()=> this.props.history.push('/'))
         
    }
    
    render() {
        return (
            <>
                
                {this.handleSubmit()}
            </>
        )
    }
}
export default Guest;