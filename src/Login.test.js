import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Login from './Login';
import Checkbox from './Checkbox';

describe('Login', () => {
  it('renders successfully and can be unmounted', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('updates the state stayLogged when the checkbox onValueChange is called', () => {
    const renderer = TestRenderer.create(<Login />);
    const instance = renderer.root;

    instance.findByType(Checkbox).props.onValueChange(true);

    expect(instance._fiber.stateNode.state.stayLogged).toBe(true);
  });
});
