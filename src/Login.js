import React from 'react';

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

  componentDidMount() {
    this.checkValidity('login');
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
    this.switchTo(e, 'login');
  }

  handleSignup(e) {
    e.preventDefault();
    this.switchTo(e, 'login');
  }

  switchTo(e, target) {
    e.preventDefault();
    this.setState({
      displayLogin: target === 'login',
      displayForgotten: target === 'forgotten',
      displaySignup: target === 'signup',
    });
    this.checkValidity(target);
  }

  checkValidity(formId) {
    const isValid = (document.getElementById(formId) && document.getElementById(formId).checkValidity()) || false;

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
        <form id="login" autoComplete="off" onSubmit={(e) => this.handleLogin(e)} onChange={() => this.checkValidity('login')}>
          <input autoComplete="false" name="hidden" type="text" className="hidden" />

          <TextInput
            label={this.props.usernameLabel}
            value={this.state.username}
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'login')} />

          <PasswordInput
            label={this.props.passwordLabel}
            value={this.state.password}
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'login')} />

          <SubmitButton disabled={!this.state.validLoginForm} label={this.props.loginButtonText} />

          <Checkbox
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
        <form id="forgotten" autoComplete="off" onSubmit={(e) => this.handleForgotten(e)} onChange={() => this.checkValidity('forgotten')}>
          <input autoComplete="false" name="hidden" type="text" className="hidden" />

          <EmailInput
            label={this.props.emailLabel}
            value={this.state.email} autoComplete="off"
            required
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'forgotten')} />

          <SubmitButton disabled={!this.state.validForgottenForm} label={this.props.forgottenButtonText} />
        </form>
        ) : null}

        {this.state.displaySignup ? (
        <form id="signup" autoComplete="off" onSubmit={(e) => this.handleSignup(e)} onChange={() => this.checkValidity('signup')}>
          <input autoComplete="false" name="hidden" type="text" className="hidden" />

          <TextInput
            label={this.props.usernameLabel}
            value={this.state.username} autoComplete="off"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'signup')} />

          <PasswordInput
            label={this.props.passwordLabel}
            value={this.state.password} autoComplete="off"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'signup')} />

          <EmailInput
            label={this.props.emailLabel}
            value={this.state.email} autoComplete="email"
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'signup')} />

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

export default Login;
