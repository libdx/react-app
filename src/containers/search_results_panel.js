//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'

import { searchMovies, fetchMovies } from '../actions'

import type { SearchScope } from '../types/search'

const buttonRecords: Array<ButtonRecord> = [
    {id: "TITLE", title: "Title"},
    {id: "GENRE", title: "Genre"}
]

type Props = {
    title: string,
    term: string,
    searchScope: SearchScope,
    onChange?: (term: string, searchScope: SearchScope) => void,
}

class SearchResultsPanel extends Component<Props> {
    onTermChange = (term: string): void => {
        const { searchScope, onChange } = this.props

        onChange(term, searchScope)
    }

    onButtonGroupClick = (id: SearchScope): void => {
        const searchScope = id
        const { term, onChange } = this.props

        onChange(term, searchScope)
    }

    render() {
        const { title, term, searchScope } = this.props

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
    term: state.query.term,
    searchScope: state.query.searchScope
})

const mapDispatchToProps = dispatch => ({
    onChange: (term, searchScope) => {
        dispatch(fetchMovies({ term, searchScope }))
        dispatch(searchMovies({ term, searchScope }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel)

