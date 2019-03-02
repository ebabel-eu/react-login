import React from 'react';

const SubmitButton = ({label}) => (
 <input type="submit" value={label} />
);

SubmitButton.defaultProps = {
  label: 'Send',
};

export default SubmitButton;
