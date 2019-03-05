import React from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends React.Component {
  handleChange(e) {
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(e.target.value);
    }
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="password"
          value={this.props.value}
          autoComplete={this.props.autoComplete}
          name={this.props.name}
          required={this.props.required}
          placeholder={this.props.placeholder}
          onChange={(e) => this.handleChange(e)} />
      </label>
    );
  }
}

PasswordInput.defaultProps = {
  label: 'Password',
  placeholder: 'Blanch3dalm0nd',
};

PasswordInput.propTypes = {
  onValueChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default PasswordInput;
