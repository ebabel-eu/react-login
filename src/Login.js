import React from 'react';

import TextInput from './TextInput';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username || '',
      password: props.password || '',
      email: props.email || '',
      usernameLabel: props.usernameLabel || 'Username',
      passwordLabel: props.passwordLabel || 'Password',
      emailLabel: props.emailLabel || 'E-mail',
      stayLogged: props.stayLogged || false,
      stayLoggedDuration: props.stayLoggedDuration || 14,
      stayLoggedUnit: props.stayLoggedUnit || 'days',
      stayLoggedLabel: props.stayLoggedLabel || 'Stay logged-in',
      stayLoggedDurationDescription: props.stayLoggedDurationDescription || 'for 2 weeks',
      forgottenLink: props.forgottenLink || 'Forgotten password?',
      signupLink: props.signupLink || 'Need to signup for an account?',
      displayLogin: props.displayLogin || true,
      displayForgotten: props.displayForgotten || false,
      displaySignup: props.displaySignup || false,
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
      case 'email':
        this.setState({
          email: e.target.value,
        });
        break;
      default:
        throw new Error(`Unexpected form field ${toUpdate}.`);
    }
  }
  
  handleLogin(e) {
    e.preventDefault();
    console.log(this.state);
    // todo: use Axios to submit this login payload to a given endpoint.
  }
  
  handleForgotten(e) {
    e.preventDefault();
    this.switchToLogin(e);
  }
  
  handleSignup(e) {
    e.preventDefault();
    this.switchToLogin(e);
  }
  
  switchToLogin(e) {
    e.preventDefault();
    this.setState({
      displayLogin: true,
      displayForgotten: false,
      displaySignup: false,
    });
  }
  
  switchToForgotten(e) {
    e.preventDefault();
    this.setState({
      displayLogin: false,
      displayForgotten: true,
      displaySignup: false,
    });
  }
  
  switchToSignup(e) {
    e.preventDefault();
    this.setState({
      displayLogin: false,
      displayForgotten: false,
      displaySignup: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.displayLogin ? (
        <form id="login" onSubmit={(e) => this.handleLogin(e)}>
          <TextInput label={this.state.usernameLabel}
            value={this.state.username} autocomplete="username" />

          <label>
            <span>{this.state.passwordLabel}</span>
            <input type="password" value={this.state.password}
              autoComplete="current-password"
              onChange={(e) => this.handleChange(e, 'password')} />
          </label>

          <input type="submit" value="Login" />

          <label>
            <input type="checkbox" defaultChecked={this.state.stayLogged} /> {this.state.stayLoggedLabel} {this.state.stayLoggedDurationDescription}
          </label>

          <p>
            <a href="#forgotten" onClick={(e) => this.switchToForgotten(e)}>{this.state.forgottenLink}</a>
          </p>

          <p>
            <a href="#signup" onClick={(e) => this.switchToSignup(e)}>{this.state.signupLink}</a>
          </p>
        </form>
        ) : null}

        {this.state.displayForgotten ? (
        <form id="forgotten" onSubmit={(e) => this.handleForgotten(e)}>
          <label>
            <span>{this.state.usernameLabel}</span>
            <input type="text" value={this.state.username}
              autoComplete="username"
              onChange={(e) => this.handleChange(e, 'username')} />
          </label>

          <input type="submit" value="Reset your password" />
        </form>
        ) : null}

        {this.state.displaySignup ? (
        <form id="signup" onSubmit={(e) => this.handleSignup(e)}>
          <label>
            <span>{this.state.usernameLabel}</span>
            <input type="text" value={this.state.username}
              autoComplete="username"
              onChange={(e) => this.handleChange(e, 'username')} />
          </label>

          <label>
            <span>{this.state.passwordLabel}</span>
            <input type="password" value={this.state.password}
              autoComplete="new-password"
              onChange={(e) => this.handleChange(e, 'password')} />
          </label>

          <label>
            <span>{this.state.emailLabel}</span>
            <input type="email" value={this.state.email}
              autoComplete="email"
              onChange={(e) => this.handleChange(e, 'email')} />
          </label>
'
          <input type="submit" value="Signup" />
        </form>
        ) : null}
      </div>
    );
  }
}

export default Login;
