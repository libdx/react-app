//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'

import { searchMovies } from '../actions/search_movies'
import { fetchMovies } from '../actions/fetch_movies'

import type { SearchScope } from '../types/search'
import type { Query } from '../types/query'

const buttonRecords: Array<ButtonRecord> = [
    {id: "TITLE", title: "Title"},
    {id: "GENRE", title: "Genre"}
]

type Props = {
    title: string,
    query: Query,
    onChange?: (query: Query) => void,
}

class SearchResultsPanel extends Component<Props> {
    onTermChange = (term: string): void => { const { query, onChange } = this.props

        onChange({ ...query, term })
    }

    onButtonGroupClick = (id: SearchScope): void => {
        const searchScope = id
        const { query, onChange } = this.props

        onChange({ ...query, searchScope })
    }

    render() {
        const { title, query: {term, searchScope} } = this.props

        return (
            <SearchPanel term={term} onChange={this.onTermChange} >
                <ButtonGroup
                    title={title}
                    buttons={buttonRecords}
                    selectedButtonId={searchScope}
                    onClick={this.onButtonGroupClick}
                />
            </SearchPanel>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    query: state.query
})

// FIXME: Make use of debounce middleware instead of debouncing action dispatch in place
const dispatchFetchMovies = _.debounce((dispatch, query) => {
    dispatch(fetchMovies(query))
}, 300)

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (query) => {
        dispatchFetchMovies(dispatch, query)
        dispatch(searchMovies(query))
    },
    ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel)

