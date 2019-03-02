import React from 'react';

const SubmitButton = ({label, disabled}) => (
 <input type="submit" value={label} disabled={disabled} />
);

SubmitButton.defaultProps = {
  label: 'Send',
  disabled: true,
};

export default SubmitButton;
