import React from 'react';
import './EmailInput.css';

class EmailInput extends React.Component {
  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="email" value={this.props.value}
          autoComplete={this.props.autocomplete}
          onChange={(e) => this.handleChange(e)} />
      </label>
    );
  }
}

export default EmailInput;
