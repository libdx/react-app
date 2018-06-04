//@flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import StatusBar from '../components/status_bar'
import { searchMovies } from '../actions/search_movies'
import { fetchMovies } from '../actions/fetch_movies'

import type { SortKey, SortOrder } from '../types/sorting'
import type { Query } from '../types/query'

type Props = {
    title: string,
    query: Query,
    onChange: (query: Query) => void
}

const sortOptions = [
    {id: 'RELEASE_DATE', title: 'release date'},
    {id: 'RATING', title: 'rating'}
]

class SortingStatusBar extends PureComponent<Props> {
    onOptionClick = (sortKey: SortKey): void => {
        const { query, onChange } = this.props

        onChange({ ...query, sortKey })
    }

    render() {
        const { title, query: { sortKey } } = this.props
        return (
            <StatusBar
                title={title}
                options={sortOptions}
                activeOptionID={sortKey}
                onOptionClick={this.onOptionClick}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    query: state.query
})

const dispatchFetchMovies = _.debounce((dispatch, query) => {
    dispatch(fetchMovies(query))
}, 300)

const mapDispatchToProps = dispatch => ({
    onChange: (query: Query) => {
        dispatchFetchMovies(dispatch, query)
        dispatch(searchMovies(query))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortingStatusBar)

