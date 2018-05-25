//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'

import { searchMovies, fetchMovies } from '../actions'

import type { Criteria } from '../types/search'

const buttonRecords: Array<ButtonRecord> = [
    {id: "TITLE", title: "Title"},
    {id: "GENRE", title: "Genre"}
]

type Props = {
    title: string,
    term: string,
    searchBy: Criteria,
    onChange?: (term: string, searchBy: Criteria) => void,
}

class SearchResultsPanel extends Component<Props> {
    onTermChange = (term: string): void => {
        const { searchBy, onChange } = this.props

        onChange(term, searchBy)
    }

    onButtonGroupClick = (id: Criteria): void => {
        const searchBy = id
        const { term, onChange } = this.props

        onChange(term, searchBy)
    }

    render() {
        const { title, term, searchBy } = this.props

        return (
            <SearchPanel term={term} onChange={this.onTermChange} >
                <ButtonGroup
                    title={title}
                    buttons={buttonRecords}
                    selectedButtonId={searchBy}
                    onClick={this.onButtonGroupClick}
                />
            </SearchPanel>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    term: state.query.term,
    searchBy: state.query.searchBy
})

const mapDispatchToProps = dispatch => ({
    onChange: (term, searchBy) => {
        dispatch(fetchMovies({ term, searchBy }))
        dispatch(searchMovies({ term, searchBy }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel)

