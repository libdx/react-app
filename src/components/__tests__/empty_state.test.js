import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '../empty_state';

describe('EmptyState', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EmptyState />);
  });

  it('has label', () => {
    const label = component.find('.not-found-label');

    expect(label.exists()).toBe(true);
  });
});
