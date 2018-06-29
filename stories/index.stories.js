import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/common.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button, { SECONDARY } from '../src/components/button';
import ButtonGroup from '../src/components/button_group';
import MovieCard from '../src/components/movie_card';
import MovieGrid from '../src/components/movie_grid';
import MovieDetails from '../src/components/movie_details';
import SearchPanel from '../src/components/search_panel';
import EmptyState from '../src/components/empty_state';
import NotFound from '../src/components/not_found';

import { forrest as movie, movies } from '../src/data/mocks';

storiesOf('Button', module)
  .add('with text', () => <Button title="Common Button" onClick={action('clicked')} />)
  .add('selected with text', () => (
    <Button title="Selected Button" selected onClick={action('clicked')} />
  ))
  .add('secondary with text', () => (
    <Button title="Secondary Button" kind={SECONDARY} selected onClick={action('clicked')} />
  ));

storiesOf('ButtonGroup', module)
  .add('with title and text', () => (
    <ButtonGroup title="Which OS?" buttons={
      [{ id: '0', title: 'macOS' }, { id: '1', title: 'Linux' }, { id: '2', title: 'Windows' }]
    }
    selectedButtonId="1" onClick={action('button from group clicked')} />
  ));

storiesOf('MovieCard', module)
  .add('with Forrest', () => (
    <MovieCard movie={movie} onClick={action('card clicked')} />
  ));

storiesOf('MovieGrid', module)
  .add('with Forrest', () => (
    <MovieGrid movies={movies} onClick={action('card from grid clicked')} />
  ));

storiesOf('MovieDetails', module)
  .add('with Forrest', () => (
    <MovieDetails movie={movie} />
  ));

storiesOf('SearchPanel', module)
  .add('default', () => (
    <SearchPanel term="Matrix" onChange={action('search term changed')} />
  ))
  .add('with some children', () => (
    <SearchPanel term="Matrix" onChange={action('search term changed')} >
      <ButtonGroup title="Scope Search By?" buttons={
        [{ id: '0', title: 'macOS' }, { id: '1', title: 'Linux' }, { id: '2', title: 'Windows' }]
      } />
    </SearchPanel>
  ));

storiesOf('EmptyState', module)
  .add('when nothing found', () => (
    <EmptyState />
  ));

storiesOf('NotFound', module)
  .add('simply 404 page', () => (
    <NotFound />
  ));
