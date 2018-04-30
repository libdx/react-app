//@flow

import React, { Component } from 'react'

import Header from './header'
import SearchBar from './search_bar'
import StatusBar from './status_bar'
import Footer from './footer'
import MovieCard from './movie_card'
import MovieGrid from './movie_table'

import Movie from '../movie'

const forrest: Movie = {
    imageURL: "https://bit.ly/2H38owZ",
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
                <Footer brand={brand} />
            </div>
        )
    }
}

export default App
