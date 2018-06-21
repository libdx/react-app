//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MovieNavigationGrid from '../components/movie_navigation_grid'

const mapStateToProps = (state) => ({
    movies: state.movies
})

const MovieResultsGrid = connect(mapStateToProps)(MovieNavigationGrid)

export default MovieResultsGrid

