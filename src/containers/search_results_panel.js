//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'

import { searchMovies, fetchMovies } from '../actions'

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
    onTermChange = (term: string): void => {
        const { query, onChange } = this.props

        onChange({ ...query, term })
    }

    onButtonGroupClick = (id: SearchScope): void => {
        const searchScope = id
        const { query, onChange } = this.props
        console.log(id)

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

const dispatchFetchMovies = _.debounce((dispatch, query) => {
    dispatch(fetchMovies(query))
}, 300)

const mapDispatchToProps = dispatch => ({
    onChange: (query) => {
        dispatchFetchMovies(dispatch, query)
        dispatch(searchMovies(query))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel)

