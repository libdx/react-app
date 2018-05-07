//@flow

import * as React from 'react'

type Props = {
    title: string,
    selected?: boolean,
    onClick?: (SyntheticMouseEvent<HTMLButtonElement> | void) => void
}

const Button = ({ title, selected, onClick }: Props) => {
    const className = selected ? "btn btn-info" : "btn btn-outline-info"
    return <button type="button" className={className} onClick={onClick}>{title}</button>
}

export default Button
