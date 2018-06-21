//flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MovieGrid from '../components/movie_grid.js'

type Props = {
    movies: Array<Movie>,
    onClick?: (id: number) => void
}

const onClickWithHistory = (history) => (id: number): void => {
    history.push(`/movies/${id}`)
}

const MovieNavigationGrid = withRouter((props: Props) => {
    const { history } = props
    const onClick = onClickWithHistory(history)
    return (
        <MovieGrid {...props} onClick={onClick}/>
    )
})

export default MovieNavigationGrid

