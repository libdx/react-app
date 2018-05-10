import React, { Component } from 'react'

type Props = {
    brand: string
}

const Footer = ({brand}: Props) => {
    return (
        <div className="footer">
            <span>{brand}</span>
        </div>
    )
}

export default Footer
