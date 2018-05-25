//@flow
import React, { PureComponent } from 'react'
import type { SortKey } from '../types/sorting'

type SortOption = {
    id: SortKey,
    title: string
}

type Props = {
    title: string,
    options: Array<SortOption>,
    activeOptionID?: string,
    onOptionClick?: (id: SortKey) => void
}

class StatusBar extends PureComponent<Props> {

    renderOption = (option: SortOption) => {
        const { activeOptionID, onOptionClick } = this.props
        const sortOptClassName = option.id === activeOptionID ? 'sort-opt-active' : 'sort-opt'
        const className = `col-2 ${sortOptClassName}`
        const onClick = e => onOptionClick && (option.id !== activeOptionID) && onOptionClick(option.id)

        return (
            <span key={option.id} className={className} onClick={onClick}>
                {option.title}
            </span>
        )
    }

    render() {
        const { title, options=[], activeOptionID } = this.props
        return (
            <div className="status-bar">
                <div className="row">
                    <span className="col-6">{title}</span>
                    <span className="col-2">Sort by</span>
                    {options.map(this.renderOption)}
                </div>
            </div>
        )
    }
}

export default StatusBar
