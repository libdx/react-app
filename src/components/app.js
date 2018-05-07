//@flow

import React, { Component } from 'react'

import ErrorBoundary from './error_boundary'
import Header from './header'
import SearchBar from './search_bar'
import StatusBar from './status_bar'
import Footer from './footer'
import EmptyState from './empty_state'
import MovieCard from './movie_card'
import MovieGrid from './movie_table'
import MovieDetails from './movie_details'

import type { Movie } from '../movie'

const forrest: Movie = {
    imageURL: "http://t0.gstatic.com/images?q=tbn:ANd9GcSppDgk99BKVA4TJtWc1FN4-HUkdWrFNfMm1-M0nQ01sIOcbTZu",
    title: "Forrest Gump",
    releaseYear: "1994",
    gener: "Comedy-drama",
    description: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright)."
}

type AppProps = {}

class App extends Component<AppProps> {
    render() {
        const brand = "Movieseek"
        return (
            <div className="container">
                <ErrorBoundary>
                    <Header brand={brand}>
                        <SearchBar />
                    </Header>
                    <StatusBar title="Search results" />
                    <MovieGrid movies={[forrest, forrest, forrest, forrest, forrest, forrest]} />
                    <EmptyState />
                    <Header brand={brand}>
                        <MovieDetails movie={forrest} />
                    </Header>
                    <Footer brand={brand} />
                </ErrorBoundary>
            </div>
        )
    }
}

export default App