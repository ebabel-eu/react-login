import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      usernameLabel: 'Username',
      password: '',
      passwordLabel: 'Password',
      stayLoggedDuration: 14,
      stayLoggedUnit: 'days',
      stayLoggedDurationDescription: '2 weeks',
    };
  }

  handleChange(e, toUpdate) {
    switch (toUpdate) {
      case 'username':
        this.setState({
          username: e.target.value,
        });
        break;
      case 'password':
        this.setState({
          password: e.target.value,
        });
        break;
      default:
        throw new Error(`Unexpected form field ${toUpdate}.`);
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // todo: use Axios to submit this login payload to a given endpoint.
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <span>{this.state.usernameLabel}</span>
          <input
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
            type="text" />
        </label>
        
        <label>
          <span>{this.state.passwordLabel}</span>
          <input
            value={this.state.password}
            onChange={(e) => this.handleChange(e, 'password')}
            type="password" />
        </label>
        
        <input type="submit" value="Login" />
        
        <label>
          <input type="checkbox" /> Stay logged in for {this.state.stayLoggedDurationDescription}.
        </label>
      </form>
    );
  }
}

export default Login;
