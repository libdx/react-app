import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MoviePoster from '../movie_poster';
import { posterURL } from '../../types/movie';

// FIXME: fire out how to properly mock model objects
import { forrest as movie } from '../../data/mocks';

describe('MoviePoster', () => {
  let element;
  let component;

  beforeEach(() => {
    element = <MoviePoster movie={movie} />;
    component = shallow(element);
  });

  it('has correct URL', () => {
    const image = component.find('.poster-img');
    expect(image.props().src).toEqual(posterURL(movie));
  });

  it('renders correctly', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
