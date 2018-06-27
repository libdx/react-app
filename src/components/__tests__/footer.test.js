import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from '../footer';

describe('Footer', () => {
  const brand = 'Brand';
  let component;
  let label;

  beforeEach(() => {
    component = shallow(<Footer brand={brand} />);
    label = component.find('.brand-label');
  });

  it('has brand label', () => {
    expect(label.exists()).toBe(true);
  });

  it('shows correct brand text', () => {
    expect(label.text()).toEqual(brand);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer brand={brand} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
