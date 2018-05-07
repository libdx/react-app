//@flow

import * as React from 'react'

// Consts have values of partial css class names to simplify mapping
export const INFO: string = "info"
export const SECONDARY: string = "secondary"

type Props = {
    title: string,
    selected?: boolean,
    kind?: string,
    onClick?: (SyntheticMouseEvent<HTMLButtonElement> | void) => void
}

const Button = ({ title, selected, kind, onClick }: Props) => {
    const _kind = kind ? kind : INFO
    const className = selected ? `btn btn-${_kind}` : `btn btn-outline-${_kind}`
    return <button type="button" className={className} onClick={onClick}>{title}</button>
}

export default Button
