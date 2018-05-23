//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'

import { filterMovies, fetchMovies } from '../actions'

import type { Criteria } from '../types/criteria'

const buttonRecords: Array<ButtonRecord> = [
    {id: "TITLE", title: "Title"},
    {id: "GENRE", title: "Genre"}
]

type Props = {
    // title: string,
    term: string,
    searchBy: Criteria,
    onChange?: (term: string, searchBy: Criteria) => void,
}

class FilterPanel extends Component<Props> {
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
        const { term, searchBy } = this.props

        return (
            <SearchPanel term={term} onChange={this.onTermChange} >
                <ButtonGroup
                    title="Search by"
                    buttons={buttonRecords}
                    selectedButtonId={searchBy}
                    onClick={this.onButtonGroupClick}
                />
            </SearchPanel>
        )
    }
}

const mapStateToProps = state => ({
    term: state.filter.term,
    searchBy: state.filter.searchBy
})

const mapDispatchToProps = dispatch => ({
    onChange: (term, searchBy) => {
        dispatch(fetchMovies({ term, searchBy }))
        dispatch(filterMovies({ term, searchBy }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)

