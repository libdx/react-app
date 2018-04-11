import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Button = ({title}) => {
    return (
        <button className="btn btn-warning">
            {title}
        </button>
    )
}

export default Button
