import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders successfully and can be unmounted', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is not checked by default', () => {
    const checkbox = <Checkbox />;
    expect(checkbox.props.defaultChecked).toBe(false);
  });

  it('has a label property', () => {
    const checkbox = <Checkbox />;
    expect(checkbox.props.label).toBeDefined();
  });

  it('has a label property that can be modified', () => {
    const checkbox = <Checkbox label="I agree with the privacy policy." />;
    expect(checkbox.props.label).toBe('I agree with the privacy policy.');
  });
});
