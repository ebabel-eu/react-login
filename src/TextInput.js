import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input type="text" value={this.state.value}
          autoComplete={this.props.autocomplete}
          onChange={(e) => this.handleChange(e)} />
      </label>
    );
  }
}

export default TextInput;
