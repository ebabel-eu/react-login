import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  handleChange(e) {
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(e.target.value.trim());
    }
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input
          type={this.props.type}
          defaultValue={this.props.value}
          autoComplete={this.props.autoComplete}
          name={this.props.name}
          required={this.props.required}
          placeholder={this.props.placeholder}
          onChange={(e) => this.handleChange(e)} />
      </label>
    );
  }
}

InputField.defaultProps = {
  type: 'text',
  label: 'Full name',
  placeholder: 'John Smith',
};

InputField.propTypes = {
  type: PropTypes.string,
  onValueChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default InputField;
