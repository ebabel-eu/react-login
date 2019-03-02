import React from 'react';

import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';
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
      usernamePlaceholder: props.usernamePlaceholder || 'johnsmith or john.smith@company.eu',
      passwordPlaceholder: props.passwordPlaceholder || 'Blanch3dalm0nd',
      emailPlaceholder: props.emailPlaceholder || 'john.smith@company.eu',
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

  handleUsernameChange(value) {
    this.setState({ username: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  render() {
    return (
      <div>
        {this.state.displayLogin ? (
        <form id="login" onSubmit={(e) => this.handleLogin(e)}>
          <TextInput label={this.state.usernameLabel}
            value={this.state.username} autocomplete="username"
            required
            placeholder={this.state.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value)} />

          <PasswordInput label={this.state.passwordLabel}
            value={this.state.password} autocomplete="password"
            required
            placeholder={this.state.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value)} />

          <SubmitButton label="Login" />

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
          <EmailInput label={this.state.emailLabel}
            value={this.state.email} autocomplete="email"
            required
            placeholder={this.state.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value)} />

          <SubmitButton label="Reset your password" />
        </form>
        ) : null}

        {this.state.displaySignup ? (
        <form id="signup" onSubmit={(e) => this.handleSignup(e)}>
          <TextInput label={this.state.usernameLabel}
            value={this.state.username} autocomplete="username"
            required
            placeholder={this.state.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value)} />

          <PasswordInput label={this.state.passwordLabel}
            value={this.state.password} autocomplete="new-password"
            required
            placeholder={this.state.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value)} />

          <EmailInput label={this.state.emailLabel}
            value={this.state.email} autocomplete="email"
            placeholder={this.state.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value)} />

          <SubmitButton label="Signup" />
        </form>
        ) : null}
      </div>
    );
  }
}

export default Login;
