//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/header'
import MovieNavigationGrid from '../components/movie_navigation_grid'
import Footer from '../components/footer'
import MovieDetails from '../components/movie_details'
import StatusBar from '../components/status_bar'
import { fetchMovie } from '../actions/fetch_movie'
import { loadMovie } from '../actions/load_movie'
import { fetchRelevantMovies } from '../actions/fetch_relevant_movies'
import { loadRelevantMovies } from '../actions/load_relevant_movies'
import { topmostGenre } from '../types/movie'

import type { Movie } from '../types/movie'
import type { Action } from '../types/action'

type Params = {
    id?: string
}

type Match = {
    params: Params
}

type Props = {
    match?: Match,
    movie?: Movie,
    relevantMovies?: Array<Movie>,
    fetchMovie?: (id: number) => void,
    fetchRelevantMovies?: (movie: Movie) => void
}

class MoviePage extends Component<Props> {
    componentDidMount() {
        const { match, fetchMovie } = this.props

        if (match) {
            const id = parseInt(match.params.id)
            fetchMovie && fetchMovie(id)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { fetchRelevantMovies } = this.props

        const { movie } = this.props
        const { movie: prevMovie } = prevProps

        if (movie && movie !== prevMovie) {
            fetchRelevantMovies && fetchRelevantMovies(movie)
        }
    }

    render() {
        const { movie, relevantMovies=[] } = this.props

        const brand = "Movieseek"

        const genre: string = movie ? topmostGenre(movie) : ''

        return (
            <div>
                <Header brand={brand}>
                    {movie ? <MovieDetails movie={movie} /> : "Placeholder" }
                </Header>
                <StatusBar title={`Movies by ${genre}`} />
                { relevantMovies.length > 0 ? <MovieNavigationGrid movies={relevantMovies} /> : "No relevant movies found" }
                <Footer brand={brand} />
            </div>
        )
    }
}

export const prefetchData = async (movieId: number): Promise<any> => {
    const { data: currentMovie } = await loadMovie(movieId).payload
    const genre = topmostGenre(currentMovie)
    const { data: { data: relevantMovies } } = await loadRelevantMovies(genre).payload
    return { currentMovie, relevantMovies }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    movie: state.currentMovie,
    relevantMovies: state.relevantMovies
})

const mapDispatchToProps = dispatch => ({
    fetchMovie: (id: number) => {
        dispatch(fetchMovie(id))
    },
    fetchRelevantMovies: (movie: Movie) => {
        const genre = topmostGenre(movie)
        dispatch(fetchRelevantMovies(genre))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
