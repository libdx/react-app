// @flow

import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from './components/error_boundary';
import Header from './components/header';
import Footer from './components/footer';
import EmptyState from './components/empty_state';
import NotFound from './components/not_found';
import MovieDetails from './components/movie_details';
import IndexPage from './pages/index_page';
import MoviePage from './pages/movie_page';

type Props = {}

class App extends Component<Props> {
  render() {
    const brand = 'Movieseek';
    return (
            <div className="container">
                <ErrorBoundary>
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route exact path="/search" component={IndexPage} />
                        <Route exact path="/search/:term" component={IndexPage} />
                        <Route exact path="/movies/:id" component={MoviePage} />
                        <Redirect exact from="/film/:id" to="/movies/:id" />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </ErrorBoundary>
            </div>
    );
  }
}

export default App;
