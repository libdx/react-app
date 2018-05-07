//@flow

import React from 'react'
import Button from './button'

type Props = { 
    title: string,
    buttonTitles: Array<string>,
    selectedIndex: number,
    onClick?: (index: number) => void
}

const FilterButtonGroup = ({ title, buttonTitles, selectedIndex, onClick }: Props) => {

    const titleToButton = (title, index) => {
        return (
            <Button
                key={index}
                title={title}
                selected={index === selectedIndex}
                onClick={e => onClick && onClick(index) }
            />
        )
    }

    return (
        <div className="button-group">
            <span>{title}</span>
            {buttonTitles.map(titleToButton)}
        </div>
    )
}

export default FilterButtonGroup

