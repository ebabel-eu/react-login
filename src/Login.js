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
      username: props.username,
      password: props.password,
      email: props.email,
      stayLogged: props.stayLogged,
      displayLogin: props.displayLogin,
      displayForgotten: props.displayForgotten,
      displaySignup: props.displaySignup,
    };
  }

  handleLogin(e) {
    e.preventDefault();

    const payload = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      stayLogged: this.state.stayLogged,
    };

    if (this.state.stayLogged) {
      payload.stayLoggedDuration = this.props.stayLoggedDuration;
      payload.stayLoggedUnit = this.props.stayLoggedUnit;
    }

    // todo: use Axios to submit this login payload to a given endpoint.
    console.log(payload);
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
          <TextInput
            label={this.props.usernameLabel}
            value={this.state.username} autocomplete="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value)} />

          <PasswordInput
            label={this.props.passwordLabel}
            value={this.state.password} autocomplete="password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value)} />

          <SubmitButton label={this.props.loginButtonText} />

          <label>
            <input type="checkbox" defaultChecked={this.state.stayLogged} /> {this.props.stayLoggedLabel} {this.props.stayLoggedDurationDescription}
          </label>

          <p>
            <a href="#forgotten" onClick={(e) => this.switchToForgotten(e)}>{this.props.forgottenLink}</a>
          </p>

          <p>
            <a href="#signup" onClick={(e) => this.switchToSignup(e)}>{this.props.signupLink}</a>
          </p>
        </form>
        ) : null}

        {this.state.displayForgotten ? (
        <form id="forgotten" onSubmit={(e) => this.handleForgotten(e)}>
          <EmailInput
            label={this.props.emailLabel}
            value={this.state.email} autocomplete="email"
            required
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value)} />

          <SubmitButton label={this.props.forgottenButtonText} />
        </form>
        ) : null}

        {this.state.displaySignup ? (
        <form id="signup" onSubmit={(e) => this.handleSignup(e)}>
          <TextInput
            label={this.props.usernameLabel}
            value={this.state.username} autocomplete="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value)} />

          <PasswordInput
            label={this.props.passwordLabel}
            value={this.state.password} autocomplete="new-password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value)} />

          <EmailInput
            label={this.props.emailLabel}
            value={this.state.email} autocomplete="email"
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value)} />

          <SubmitButton label={this.props.signupButtonText} />
        </form>
        ) : null}
      </div>
    );
  }
}

Login.defaultProps = {
  username: '',
  password: '',
  email: '',
  stayLogged: false,
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  emailLabel: 'E-mail',
  usernamePlaceholder: 'johnsmith or john.smith@company.eu',
  passwordPlaceholder: 'Blanch3dalm0nd',
  emailPlaceholder: 'john.smith@company.eu',
  stayLoggedDuration: 14,
  stayLoggedUnit: 'days',
  stayLoggedLabel: 'Stay logged-in',
  stayLoggedDurationDescription: 'for 2 weeks',
  forgottenLink: 'Forgotten password?',
  signupLink: 'Need to signup for an account?',
  displayLogin: true,
  displayForgotten: false,
  displaySignup: false,
  loginButtonText: 'Login',
  forgottenButtonText: 'Reset your password',
  signupButtonText: 'Signup',
};

export default Login;
