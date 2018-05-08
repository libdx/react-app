//@flow

import * as React from 'react'

// Consts have values of partial css class names to simplify mapping
export const INFO: string = "info"
export const SECONDARY: string = "secondary"

type Props = {
    id?: string,
    title: string,
    selected?: boolean,
    kind?: string,
    onClick?: (string | void) => void
}

const Button = ({ id='', title, selected=false, kind=INFO, onClick }: Props) => {
    const className = selected ? `btn btn-${kind}` : `btn btn-outline-${kind}`
    return <button type="button" className={className} onClick={ e => onClick && onClick(id) }>{title}</button>
}

export default Button
