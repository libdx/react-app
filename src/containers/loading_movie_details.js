//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieDetails from '../components/movie_details'

import type { Movie } from '../types/movie'

type Props = {
    movieID: number,
    movie?: Movie,
    fetchMovie?: (movieID: number) => void
}

class LoadingMovieDetails extends Component<Props> {
    componentDidMount() {
        const { movieID, fetchMovie } = this.props

        fetchMovie && fetchMovie(movieID)
    }

    render() {
        const { movie } = this.props

        return movie ? <MovieDetails movie={movie} /> : <div>Placeholder</div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    movie: state.viewedMovie
})

const mapDispatchToProps = dispatch => ({
    fetchMovie: (movieID: number) => {
        // TODO: add `fetchMovie` action creator
        //dispatch(fetchMovie(movieID))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadingMovieDetails)
