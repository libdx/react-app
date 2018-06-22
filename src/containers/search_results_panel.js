//flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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

//const updateHistory_ = (history, term) => {
//    const encodedTerm = encodeURI(query.term)
//    history.replace(`/search/${encodedTerm}`)
//}
//
//const updateHistory = _.debounce(updateHistory_, 300)

class SearchResultsPanel extends Component<Props> {
    onTermChange = (term: string): void => { const { query, onChange } = this.props

        onChange({ ...query, term })
    }

    onButtonGroupClick = (id: SearchScope): void => {
        const searchScope = id
        const { query, onChange } = this.props

        onChange({ ...query, searchScope })
    }

    updateHistory(term) {
        const encodedTerm = encodeURI(query.term)
        history.replace(`/search/${encodedTerm}`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { query, history } = this.props
        const { query: prevQuery } = prevProps
    
        if (!_.isEqual(query, prevQuery) && query.term) {
            const encodedTerm = encodeURI(query.term)
            history.replace(`/search/${encodedTerm}`)
        }
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (query) => {
        dispatch(fetchMovies(query))
        dispatch(searchMovies(query))
    },
    ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanel))

