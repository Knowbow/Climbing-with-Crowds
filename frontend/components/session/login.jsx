import React from 'react';

class Login extends React.Component {
    constructor(props) {
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

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    renderErrors() {

        return (
            <ul>
                {this.props.errors}
            </ul>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
           // .then(()=> this.props.history.push('/'));
    }

    render() {
        return (
            <>
            { this.renderErrors() }
            <div className="session-form">
                <h2>Hey stranger!</h2>
                <p>It's good to have you back. Sign in here and sign up for your next climb!</p>
                <form className="signup">
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            placeholder="Name"
                           className="session-form-sign"
                        />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                            className="session-form-sign"
                        />
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
            </>
        )
    }
}
export default Login;