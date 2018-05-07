//@flow

import React from 'react'
import Button, { INFO, SECONDARY } from './button'

type Props = {
    term: string,
    placeholder?: string,
    buttonTitle: string,
    onChange?: (string) => void,
}

const SearchInput = ({ term, placeholder, buttonTitle, onChange }: Props) => {

    const _onChange = (event) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    return (
        <div className="input-group mb-3">
            <input 
                type="text"
                className="form-control"
                value={term}
                placeholder={placeholder}
                onChange={_onChange}
            />
            <div className="input-group-append">
                <Button title={buttonTitle} kind={SECONDARY} />
            </div>
        </div>
    )
}

export default SearchInput
