import React from 'react';

class TextInput extends React.Component {
  handleChange(e) {
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(e.target.value);
    }
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="text"
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

export default TextInput;
