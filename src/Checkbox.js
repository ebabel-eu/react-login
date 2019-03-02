import React from 'react';

class Checkbox extends React.Component {
  handleChange(e) {
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(e.target.checked);
    }
  }

  render() {
    return (
      <label>
        <input type="checkbox"
          defaultChecked={this.props.defaultChecked}
          onChange={(e) => this.handleChange(e)}
        /> {this.props.label}
      </label>
    );
  }
}

Checkbox.defaultProps = {
  defaultChecked: false,
  label: 'I agree with the terms and conditions.',
};

export default Checkbox;
