import 'babel-polyfill';

import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import '../src/styles/common.css';

import setupStore from '../src/setup_store';

import App from '../src/app';
import { prefetchData as prefetchDataForIndexPage } from '../src/pages/index_page';
import { prefetchData as prefetchDataForMoviePage } from '../src/pages/movie_page';

import { fetchMovies } from '../src/actions/fetch_movies';
import { fetchMovie } from '../src/actions/fetch_movie';

const port = 3000;
const assets = 'dist';

const server = express();
const router = express.Router();

const log = () => console.log(`Listening on port ${port}`);

const renderContent = (location, store) => {
  const element = <Provider store={store}>
            <Router location={location} context={{}}>
                <App />
            </Router>
        </Provider>;

  return renderToString(element);
};

const render = prefetchData => (req, res, next) => {
  const indexPath = path.resolve(path.dirname(''), assets, 'index.html');
  fs.readFile(indexPath, 'utf8', (error, template) => {
    if (error) {
      console.error('Error occurred while reading index.html file', error);
      return res.status(404).end();
    }

    const { partialState, promise } = prefetchData(req.params);

    promise.then((prefetchedState) => {
      const preloadedState = { ...partialState, ...prefetchedState };
      const { store } = setupStore(preloadedState);
      const content = renderContent(req.originalUrl, store);

      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>`,
      ).replace(
        '<!-- PRELOADED_STATE -->',
        `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`,
      );

      return res.send(html);
    });
  });
};

const prepareEmptyState = (params) => {
  const partialState = {};
  const promise = new Promise(resolve => resolve());
  return { partialState, promise };
};

const prepareIndexPage = (params) => {
  const { term } = params;
  const query = {
    term, searchScope: 'TITLE', sortKey: 'RATING', sortOrder: 'DESC',
  };

  const promise = prefetchDataForIndexPage(query);

  const partialState = { query };
  return { partialState, promise };
};

const prepareMoviePage = (params) => {
  const { id: movieId } = params;

  const promise = prefetchDataForMoviePage(movieId);

  const partialState = {};
  return { partialState, promise };
};

router.get('/', render(prepareEmptyState));
router.get('/search/:term', render(prepareIndexPage));
router.get('/movies/:id', render(prepareMoviePage));
router.use(express.static(assets));

server.use(router);
server.listen(port, log);
