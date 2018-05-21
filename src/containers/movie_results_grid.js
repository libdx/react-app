//flow

import { connect } from 'react-redux'
import MovieGrid from '../components/movie_grid.js'

const mapStateToProps = (state) => ({
    movies: state.movies
})

const MovieResultsGrid = connect(mapStateToProps)(MovieGrid)

export default MovieResultsGrid

