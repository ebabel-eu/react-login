import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
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
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <span>Username</span>
          <input
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
            type="text" />
        </label>
        
        <label>
          <span>Password</span>
          <input
            value={this.state.password}
            onChange={(e) => this.handleChange(e, 'password')}
            type="password" />
        </label>
        
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
