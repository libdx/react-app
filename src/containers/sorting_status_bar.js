//@flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StatusBar from '../components/status_bar'
import { sortMovies } from '../actions'

import type SortKey from '../types/sorting'
import { sortKey } from '../types/sorting'

type Props = {
    title: string,
    sortKey?: SortKey,
    onOptionClick: (key: SortKey) => void
}

const sortOptions = [
    {id: 'RELEASE_DATE', title: 'release date'},
    {id: 'RATING', title: 'rating'}
]

const SortingStatusBar = ({ title, sortKey, onOptionClick }: Props) => {
    return (
        <StatusBar
            title={title}
            options={sortOptions}
            activeOptionID={sortKey}
            onOptionClick={onOptionClick}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    sortKey: state.sortKey
})

const mapDispatchToProps = dispatch => ({
    onOptionClick: (key: SortKey) => dispatch(sortMovies(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortingStatusBar)

