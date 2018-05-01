//@flow

import React, { Component } from 'react'

import Header from './header'
import SearchBar from './search_bar'
import StatusBar from './status_bar'
import Footer from './footer'
import EmptyState from './empty_state'
import MovieCard from './movie_card'
import MovieGrid from './movie_table'
import MovieDetails from './movie_details'

import Movie from '../movie'

const forrest: Movie = {
    imageURL: "http://t0.gstatic.com/images?q=tbn:ANd9GcSppDgk99BKVA4TJtWc1FN4-HUkdWrFNfMm1-M0nQ01sIOcbTZu",
    title: "Forrest Gump",
    releaseYear: "1994",
    gener: "Comedy-drama"
}

type AppProps = {}

class App extends Component<AppProps> {
    render() {
        const brand = "Movieseek"
        return (
            <div className="container">
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
            </div>
        )
    }
}

export default App
