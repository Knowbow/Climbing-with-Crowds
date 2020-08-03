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
    
    componentDidMount() {
        
        this.props.clearErrors();
    }

    renderErrors(){
        
        return(
            <ul>
                {this.props.errors}
            </ul>
        )
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
            <>
                {this.renderErrors()}
            <div className="session-form">
                <h2>Join for climbing</h2>
                <p>1000s of strangers across the world have climbed toge. Create an account and you'll be on your way to join the community</p>
                <form className="wrapper">
                    
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            placeholder="First name (or nickname)"
                            className="session-form-sign"
                        />
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Email Address"
                            className="session-form-sign"
                        />
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password (at least 6 characters you won't forget!)"
                            className="session-form-sign"
                        />
                    <button className="sessionbtn" onClick={this.handleSubmit}>Sign Up</button>
                </form>
                </div>
                </>
        )
    }
}
export default Signup;