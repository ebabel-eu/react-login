import React from 'react';
import PropTypes from 'prop-types';

import C from './constants';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Checkbox from './Checkbox';
import ErrorScreen from './ErrorScreen';
import Spinner from './Spinner';
import './ReactLogin.css';

class ReactLogin extends React.Component {
  constructor(props) {
    super(props);

    const {
      username, password, email, stayLogged, 
      displayLogin, displayForgotten, displaySignup, displayLoading, displayError,
      validLoginForm, validForgottenForm, validSignupForm,
      error,
    } = this.props;

    this.state = {
      username, password, email, stayLogged, 
      displayLogin, displayForgotten, displaySignup, displayLoading, displayError,
      validLoginForm, validForgottenForm, validSignupForm,
      error,
    };
  }

  handleLogin(e) {
    e.preventDefault();

    const { username, password, stayLogged } = this.state;
    const body = { username, password, stayLogged };

    if (stayLogged) {
      body.stayLoggedDuration = this.props.stayLoggedDuration;
      body.stayLoggedUnit = this.props.stayLoggedUnit;
    }

    this.switchTo(e, 'loading');

    fetch(this.props.loginEndpoint, { ...C.POST, body: JSON.stringify(body) })
      .then((response) => {
        response.json().then(data => {
          if (response.status !== C.HTTP_STATUS.OK) {
            this.setState({ error: 'Login failed' });
            this.switchTo(null, 'error');
            return;
          }

          window.dispatchEvent(new window.CustomEvent(
            'login-successful',
            { detail: data },
          ));
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        this.switchTo(e, 'error');
      });
  }

  handleForgotten(e) {
    e.preventDefault();

    const body = { email: this.state.email  };

    this.switchTo(e, 'loading');

    fetch(this.props.forgottenEndpoint, { ...C.POST, body: JSON.stringify(body) })
      .then((response) => {
        response.json().then(data => {
          if (response.status !== C.HTTP_STATUS.OK) {
            this.setState({ error: 'Password reset failed' });
            this.switchTo(null, 'error');
            return;
          }

          window.dispatchEvent(new window.CustomEvent(
            'forgotten-successful',
            { detail: data },
          ));

          if (this.props.afterResetDisplayLogin) {
            this.switchTo(e, 'login-form');
          }
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        this.switchTo(e, 'error');
      });
  }

  handleSignup(e) {
    e.preventDefault();

    const { username, password, email } = this.state;
    const body = { username, password, email };

    this.switchTo(e, 'loading');

    fetch(this.props.signupEndpoint, { ...C.POST, body: JSON.stringify(body) })
      .then((response) => {
        response.json().then(data => {
          if (response.status !== C.HTTP_STATUS.CREATED && response.status !== C.HTTP_STATUS.OK) {
            this.setState({ error: 'Signup failed' });
            this.switchTo(null, 'error');
            return;
          }

          window.dispatchEvent(new window.CustomEvent(
            'signup-successful',
            { detail: data },
          ));

          if (this.props.afterSignupDisplayLogin) {
            this.switchTo(e, 'login-form');
          }
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        this.switchTo(e, 'error');
      });
  }

  switchTo(e, formId) {
    this.setState({
      displayLogin: formId === 'login-form',
      displayForgotten: formId === 'forgotten-form',
      displaySignup: formId === 'signup-form',
      displayLoading: formId === 'loading',
      displayError: formId === 'error',
    });
    
    if (formId === 'loading' || formId === 'error') {
      return;
    }

    const switchTimeoutId = window.setTimeout(() => {
      this.checkValidity(formId);
    }, 300);

    this.setState({
      switchTimeoutId,
    });
  }

  componentDidMount() {
    const mountTimeoutId = window.setTimeout(() => {
      this.checkValidity('login-form');
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
    const form = document.querySelector(`.${formId}`);

    if (!form) {
      return;
    }

    const isValid = form.checkValidity();

    switch (formId) {
      case 'login-form':
        this.setState({ validLoginForm: isValid });
        break;
      case 'forgotten-form':
        this.setState({ validForgottenForm: isValid });
        break;
      case 'signup-form':
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
        <form className="login-form" onSubmit={(e) => this.handleLogin(e)} onChange={() => this.checkValidity('login-form')}
          action={`#${this.props.loginHash}`} method="POST">
          <InputField
            value={this.state.username}
            autoComplete="username"
            name="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'login-form')}
            label={this.props.usernameLabel} />

          <InputField
            type="password"
            value={this.state.password}
            autoComplete="password"
            name="password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'login-form')}
            label={this.props.passwordLabel} />

          <SubmitButton
            name="login-button"
            disabled={!this.state.validLoginForm}
            label={this.props.loginButtonText} />

          <Checkbox
            checked={this.state.stayLogged}
            label={`${this.props.stayLoggedLabel} ${this.props.stayLoggedDurationDescription}`}
            onValueChange={(value) => this.handleStayLoggedChange(value, 'login-form')} />

          <ul>
            <li><a href={`#${this.props.forgottenHash}`} onClick={(e) => this.switchTo(e, 'forgotten-form')}>{this.props.forgottenLink}</a></li>
            <li><a href={`#${this.props.signupHash}`} onClick={(e) => this.switchTo(e, 'signup-form')}>{this.props.signupLink}</a></li>
          </ul>
        </form>
        ) : null}

        {this.state.displayForgotten ? (
        <form className="forgotten-form" onSubmit={(e) => this.handleForgotten(e)} onChange={() => this.checkValidity('forgotten-form')}
          action={`#${this.props.forgottenHash}`} method="POST">
          <InputField
            type="email"
            value={this.state.email}
            autoComplete="email"
            name="email"
            required
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'forgotten-form')}
            label={this.props.emailLabel} />

          <SubmitButton
            name="forgotten-button"
            disabled={!this.state.validForgottenForm}
            label={this.props.forgottenButtonText} />
        </form>
        ) : null}

        {this.state.displayLoading ? (
        <div className="loading">
          <Spinner />
          <p className="login-center">{this.props.pleaseWait}</p>
        </div>
        ) : null}

        {this.state.displayError ? <ErrorScreen
          error={this.state.error}
          errorHelpText={this.props.errorHelpText}
          loginHash={this.props.loginHash}
          forgottenHash={this.props.forgottenHash}
          signupHash={this.props.signupHash}
          loginLink={this.props.loginLink}
          forgottenLink={this.props.forgottenLink}
          signupLink={this.props.signupLink}
          switchTo={this.switchTo.bind(this)}
          errorTextColor={this.props.errorTextColor}
          errorHeaderFontSize={this.props.errorHeaderFontSize}
          errorSubHeaderFontSize={this.props.errorSubHeaderFontSize}
        /> : null}

        {this.state.displaySignup ? (
        <form className="signup-form" onSubmit={(e) => this.handleSignup(e)} onChange={() => this.checkValidity('signup-form')}
          action={`#${this.props.signupHash}`} method="POST">
          <InputField
            value={this.state.username}
            autoComplete="username"
            name="username"
            required
            placeholder={this.props.usernamePlaceholder}
            onValueChange={(value) => this.handleUsernameChange(value, 'signup-form')}
            label={this.props.usernameLabel} />

          <InputField
            type="password"
            value={this.state.password}
            autoComplete="new-password"
            name="new-password"
            required
            placeholder={this.props.passwordPlaceholder}
            onValueChange={(value) => this.handlePasswordChange(value, 'signup-form')}
            label={this.props.passwordLabel} />

          <InputField
            type="email"
            value={this.state.email}
            autoComplete="email"
            name="email"
            required
            placeholder={this.props.emailPlaceholder}
            onValueChange={(value) => this.handleEmailChange(value, 'signup-form')}
            label={this.props.emailLabel} />

          <p className="email-policy">{this.props.emailPolicy}</p>

          <SubmitButton
            name="signup-button"
            disabled={!this.state.validSignupForm}
            label={this.props.signupButtonText} />
        </form>
        ) : null}
      </div>
    );
  }
}

ReactLogin.defaultProps = {
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
  loginLink: "Login",
  forgottenLink: 'Forgotten password?',
  signupLink: 'Need to signup for an account?',
  displayLogin: true,
  displayForgotten: false,
  displaySignup: false,
  displayLoading: false,
  displayError: false,
  loginHash: 'login',
  forgottenHash: 'forgotten',
  signupHash: 'signup',
  loginButtonText: 'Login',
  forgottenButtonText: 'Reset your password',
  signupButtonText: 'Signup',
  validLoginForm: false,
  validForgottenForm: false,
  validSignupForm: false,
  loginEndpoint: 'https://jsonplaceholder.typicode.com/posts',
  forgottenEndpoint: 'https://jsonplaceholder.typicode.com/posts',
  signupEndpoint: 'https://jsonplaceholder.typicode.com/posts',
  pleaseWait: 'Please wait...',
  error: null,
  emailPolicy: 'Your e-mail is required because you might need it to reset your password in case you forget it. Your e-mail will not be used for any other purpose.',
  errorHelpText: 'What would you like to do next?',
  afterResetDisplayLogin: false,
  afterSignupDisplayLogin: false,
  errorTextColor: '#d80b0b',
  errorHeaderFontSize: '1.5em',
  errorSubHeaderFontSize: '1.25em',
};

ReactLogin.propTypes = {
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
  loginHash: PropTypes.string,
  forgottenHash: PropTypes.string,
  signupHash: PropTypes.string,
  loginButtonText: PropTypes.string,
  loginLink: PropTypes.string,
  forgottenLink: PropTypes.string,
  signupLink: PropTypes.string,
  forgottenButtonText: PropTypes.string,
  signupButtonText: PropTypes.string,
  displayLogin: PropTypes.bool,
  displayForgotten: PropTypes.bool,
  displaySignup: PropTypes.bool,
  displayLoading: PropTypes.bool,
  displayError: PropTypes.bool,
  validLoginForm: PropTypes.bool,
  validForgottenForm: PropTypes.bool,
  validSignupForm: PropTypes.bool,
  loginEndpoint: PropTypes.string,
  forgottenEndpoint: PropTypes.string,
  signupEndpoint: PropTypes.string,
  pleaseWait: PropTypes.string,
  error: PropTypes.string,
  emailPolicy: PropTypes.string,
  errorHelpText: PropTypes.string,
  afterResetDisplayLogin: PropTypes.bool,
  afterSignupDisplayLogin: PropTypes.bool,
  errorTextColor: PropTypes.string,
  errorHeaderFontSize: PropTypes.string,
  errorSubHeaderFontSize: PropTypes.string,
};

export default ReactLogin;
