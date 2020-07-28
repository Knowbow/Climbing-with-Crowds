import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user);
        // this.props.createNewUser(this.state)
            // .then(()=> this.props.history.push(''))
    }

    render(){
        return (
            <div className="session-form">
                <h2>Sign Up!!!!!</h2>
                <form>
                    <label>Name:
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign UP</button>
                </form>
                </div>
        )
    }
}
export default Signup;