import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({label, disabled}) => (
 <input type="submit" value={label} disabled={disabled} />
);

SubmitButton.defaultProps = {
  label: 'Send',
  disabled: true,
};

SubmitButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SubmitButton;
