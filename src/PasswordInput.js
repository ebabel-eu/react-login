import React from 'react';

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
        <input type="password" value={this.props.value}
          autoComplete={this.props.autocomplete}
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

export default PasswordInput;
