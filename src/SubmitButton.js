import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({name, label, disabled}) => (
 <input type="submit" name={name} value={`${label}`} disabled={disabled} />
);

SubmitButton.defaultProps = {
  disabled: true,
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default SubmitButton;
