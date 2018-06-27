import React from 'react';
import { shallow } from 'enzyme';
import Broken from '../broken';

describe('Broken', () => {
  it('throws when used', () => {
    expect(Broken).toThrow();
  });
});
