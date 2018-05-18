//@flow

import React, { Component } from 'react'

import ErrorBoundary from './components/error_boundary'
import Header from './components/header'
import Footer from './components/footer'
import EmptyState from './components/empty_state'
import MovieDetails from './components/movie_details'
import IndexPage from './pages/index_page.js'

import { forrest } from './data/mocks'

type AppProps = {}

class App extends Component<AppProps> {
    render() {
        const brand = "Movieseek"
        return (
            <div className="container">
                <ErrorBoundary>
                    <IndexPage />
                </ErrorBoundary>
            </div>
        )
    }
}

export default App

