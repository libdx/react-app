import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('App', () => {
  let element;
  let component;

  beforeEach(() => {
    element = <App />;

    component = shallow(element);
  });

  it('has error boundary', () => {
    const child = component.find('ErrorBoundary');
    expect(child.exists()).toBe(true);
  });

  it('has index page', () => {
    const child = component.find('IndexPage');
    expect(child.exists()).toBe(true);
  });
});
