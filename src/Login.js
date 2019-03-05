import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';
import Checkbox from './Checkbox';
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
      validLoginForm: props.validLoginForm,
      validForgottenForm: props.validForgottenForm,
      validSignupForm: props.validSignupForm,
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

    // todo: make axios url a property with a default endpoint, possible an AWS Lambda.
    // see https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/module-3/
    // and https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/
    axios.post('/login', payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleForgotten(e) {
    e.preventDefault();
    this.switchTo(e, 'login');
  }

  handleSignup(e) {
    e.preventDefault();
    this.switchTo(e, 'login');
  }

  switchTo(e, formId) {
    e.preventDefault();
    this.setState({
      displayLogin: formId === 'login',
      displayForgotten: formId === 'forgotten',
      displaySignup: formId === 'signup',
    });

    const switchTimeoutId = window.setTimeout(() => {
      this.checkValidity(formId);
    }, 300);

    this.setState({
      switchTimeoutId,
    });
  }

  componentDidMount() {
    const mountTimeoutId = window.setTimeout(() => {
      this.checkValidity('login');
    }, 300);

    this.setState({
      mountTimeoutId,
    });
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.switchTimeoutId);
    window.clearTimeout(this.state.mountTimeoutId);
  }

  checkValidity(formId) {
    const form = document.getElementById(formId);

    if (!form) {
      return;
    }

    const isValid = form.checkValidity();

    switch (formId) {
      case 'login':
        this.setState({ validLoginForm: isValid });
        break;
      case 'forgotten':
        this.setState({ validForgottenForm: isValid });
        break;
      case 'signup':
        this.setState({ validSignupForm: isValid });
        break;
      default:
        throw new Error(`Unexpected formId ${formId}`);
    }
  }

  handleUsernameChange(value, formId) {
    this.setState({ username: value });
    this.checkValidity(formId);
  }

  handlePasswordChange(value, formId) {
    this.setState({ password: value });
    this.checkValidity(formId);
  }

  handleEmailChange(value, formId) {
    this.setState({ email: value });
    this.checkValidity(formId);
  }

  handleStayLoggedChange(value) {
    this.setState({ stayLogged: value });
  }

  render() {
    return (
      <div className="login">
        {this.state.displayLogin ? (
        <form id="login" onSubmit={(e) => this.handleLogin(e)} onChange={() => this.checkValidity('login')}>
          <TextInput
            value={this.state.username}
            autoComplete="username"
            name="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'login')}
            label={this.props.usernameLabel} />

          <PasswordInput
            value={this.state.password}
            autoComplete="password"
            name="password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'login')}
            label={this.props.passwordLabel} />

          <SubmitButton disabled={!this.state.validLoginForm} label={this.props.loginButtonText} />

          <Checkbox
            checked={this.state.stayLogged}
            label={`${this.props.stayLoggedLabel} ${this.props.stayLoggedDurationDescription}`}
            onValueChange={(value) => this.handleStayLoggedChange(value, 'login')} />

          <p>
            <a href="#forgotten" onClick={(e) => this.switchTo(e, 'forgotten')}>{this.props.forgottenLink}</a>
          </p>

          <p>
            <a href="#signup" onClick={(e) => this.switchTo(e, 'signup')}>{this.props.signupLink}</a>
          </p>
        </form>
        ) : null}

        {this.state.displayForgotten ? (
        <form id="forgotten" onSubmit={(e) => this.handleForgotten(e)} onChange={() => this.checkValidity('forgotten')}>
          <EmailInput
            value={this.state.email}
            autoComplete="email"
            name="email"
            required
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'forgotten')}
            label={this.props.emailLabel} />

          <SubmitButton disabled={!this.state.validForgottenForm} label={this.props.forgottenButtonText} />
        </form>
        ) : null}

        {this.state.displaySignup ? (
        <form id="signup" onSubmit={(e) => this.handleSignup(e)} onChange={() => this.checkValidity('signup')}>
          <TextInput
            value={this.state.username}
            autoComplete="username"
            name="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'signup')}
            label={this.props.usernameLabel} />

          <PasswordInput
            value={this.state.password}
            autoComplete="new-password"
            name="new-password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'signup')}
            label={this.props.passwordLabel} />

          <EmailInput
            value={this.state.email}
            autoComplete="email"
            name="email"
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'signup')}
            label={this.props.emailLabel} />

          <SubmitButton disabled={!this.state.validSignupForm} label={this.props.signupButtonText} />
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
  usernamePlaceholder: 'johnsmith or john.smith@company.eu',
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
  validLoginForm: false,
  validForgottenForm: false,
  validSignupForm: false,
};

Login.propTypes = {
  username: PropTypes.string,
  usernamePlaceholder: PropTypes.string,
  usernameLabel: PropTypes.string,
  password: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  passwordLabel: PropTypes.string,
  email: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  emailLabel: PropTypes.string,
  stayLogged: PropTypes.bool,
  stayLoggedDuration: PropTypes.number,
  stayLoggedUnit: PropTypes.string,
  stayLoggedLabel: PropTypes.string,
  stayLoggedDurationDescription: PropTypes.string,
  loginButtonText: PropTypes.string,
  forgottenLink: PropTypes.string,
  signupLink: PropTypes.string,
  forgottenButtonText: PropTypes.string,
  signupButtonText: PropTypes.string,
  displayLogin: PropTypes.bool,
  displayForgotten: PropTypes.bool,
  displaySignup: PropTypes.bool,
  validLoginForm: PropTypes.bool,
  validForgottenForm: PropTypes.bool,
  validSignupForm: PropTypes.bool,
};

export default Login;
