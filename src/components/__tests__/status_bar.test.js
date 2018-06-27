import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import StatusBar from '../status_bar';

describe('StatusBar', () => {
  const title = 'A Title';
  const sortOptions = [
    { id: 'RELEASE_DATE', title: 'release date' },
    { id: 'RATING', title: 'rating' },
  ];
  let element;
  let component;
  let onOptionClick;

  beforeEach(() => {
    onOptionClick = jest.fn();
    element = <StatusBar
            title={title}
            options={sortOptions}
            activeOptionID={sortOptions[0].id}
            onOptionClick={onOptionClick}
        />;
    component = shallow(element);
  });

  it('shows correct title', () => {
    expect(component.text()).toEqual(expect.stringContaining(title));
  });

  it('shows sort options', () => {
    expect(component.text()).toEqual(expect.stringContaining(sortOptions[0].title));
    expect(component.text()).toEqual(expect.stringContaining(sortOptions[1].title));
  });

  it('shows active option', () => {
    const option = component.find('.sort-opt-active');
    expect(option.exists()).toBe(true);
  });

  it('shows inactive option', () => {
    const option = component.find('.sort-opt');
    expect(option.exists()).toBe(true);
  });

  it('passes correct id on click', () => {
    const option = component.find('.sort-opt');
    option.simulate('click');
    expect(onOptionClick).toBeCalledWith(sortOptions[1].id);
  });

  it('renders correctly', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
