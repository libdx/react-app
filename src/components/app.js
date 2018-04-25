//@flow

import React, { Component } from 'react'

import Movie from '../movie.js'
import MovieCard from './movie_card'
import MovieGrid from './movie_table'

const forrest: Movie = {
    imageURL: "https://bit.ly/2H38owZ",
    title: "Forrest Gump",
    releaseYear: "1994",
    gener: "Comedy-drama"
}

type AppProps = {}

class App extends Component<AppProps> {
    render() {
        return (
            <div className="container">
                <MovieGrid movies={[forrest, forrest, forrest, forrest, forrest, forrest]} />
            </div>
        )
    }
}

export default App
