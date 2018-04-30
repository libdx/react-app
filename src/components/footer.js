import React, { Component } from 'react'

type Props = {
    brand: string
}

const Footer = ({brand}: Props) => {
    return (
        <div className="footer">
            <div>{brand}</div>
        </div>
    )
}

export default Footer
