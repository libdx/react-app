import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonGroup from '../button_group';

describe('ButtonGroup', () => {
  const title = 'A Title';
  const records = [
    { id: '42', title: 'abc' },
    { id: '66', title: 'yxz' },
  ];

  let component;
  let element;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();

    element = (
            <ButtonGroup
                title={title}
                buttons={records}
                selectedButtonId={records[1].id}
                onClick={onClick}
            />
    );

    component = shallow(element);
  });

  it('has correct number of buttons', () => {
    const buttons = component.find('Button');
    expect(buttons.letgth).toEqual(records.letgth);
  });

  it('has correct title', () => {
    const text = component.text();
    expect(text).toEqual(expect.stringContaining(title));
  });

  it('passes correct id on click (first button)', () => {
    const button = component.find('Button').at(0);
    button.simulate('click');
    expect(onClick).toBeCalledWith(records[0].id);
  });

  it('passes correct id on click (second button)', () => {
    const button = component.find('Button').at(1);
    button.simulate('click');
    expect(onClick).toBeCalledWith(records[1].id);
  });

  it('renders correctly', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
