import React from 'react';
import PropTypes from 'prop-types';

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
          defaultChecked={this.props.checked}
          onChange={(e) => this.handleChange(e)}
        /> {this.props.label}
      </label>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  label: 'I agree with the terms and conditions.',
};

Checkbox.propTypes = {
  onValueChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

export default Checkbox;
