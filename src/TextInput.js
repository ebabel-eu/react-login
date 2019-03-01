import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="text" value={this.props.value}
          autoComplete={this.props.autocomplete}
          onChange={(e) => this.handleChange(e)} />
      </label>
    );
  }
}

export default TextInput;
