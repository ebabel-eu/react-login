import React from 'react';
import PropTypes from 'prop-types';

class ErrorScreen extends React.Component {
  handleClick(e, formId) {
    this.props.switchTo(e, formId);
  }

  render() {
    return (
      <div style={{ color: this.props.errorTextColor }}>
        <h1 style={{ fontSize: this.props.errorHeaderFontSize }}>{this.props.error}</h1>

        {this.props.errorHelpText ? (
          <h2 style={{ fontSize: this.props.errorSubHeaderFontSize }}>{this.props.errorHelpText}</h2>
        ) : null}

        <ul>
          <li><a href={`#${this.props.loginHash}`} onClick={(e) => this.handleClick(e, 'login-form')}>{this.props.loginLink}</a></li>
          <li><a href={`#${this.props.forgottenHash}`} onClick={(e) => this.handleClick(e, 'forgotten-form')}>{this.props.forgottenLink}</a></li>
          <li><a href={`#${this.props.signupHash}`} onClick={(e) => this.handleClick(e, 'signup-form')}>{this.props.signupLink}</a></li>
        </ul>
      </div>
    );
  }
}

ErrorScreen.defaultProps = {
  error: 'An error occured',
};

ErrorScreen.propTypes = {
  error: PropTypes.string,
  errorHelpText: PropTypes.string,
  loginHash: PropTypes.string,
  forgottenHash: PropTypes.string,
  signupHash: PropTypes.string,
  loginLink: PropTypes.string,
  forgottenLink: PropTypes.string,
  signupLink: PropTypes.string,
  switchTo: PropTypes.func,
  errorTextColor: PropTypes.string,
  errorHeaderFontSize: PropTypes.string,
  errorSubHeaderFontSize: PropTypes.string,
};

export default ErrorScreen;
