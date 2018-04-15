import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//
// Functional Component
//
const Input = (props) => {
    return (
        <input className="form-control" type={props.type} placeholder={props.placeholder} />
    )
}

export default Input
