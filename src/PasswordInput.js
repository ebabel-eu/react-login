import React from 'react';
import './PasswordInput.css';

class PasswordInput extends React.Component {
  handleChange(e) {
    this.props.onValueChange(e.target.value);
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

export default PasswordInput;
