import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({name, label, disabled}) => (
 <input type="submit" name={name} defaultValue={label} disabled={disabled} />
);

SubmitButton.defaultProps = {
  label: 'Send',
  disabled: true,
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SubmitButton;
