import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.js'

const app = document.getElementById('app')
console.log('moo ' + app)
ReactDOM.render(<Button title="Nothing Magical"/>, app)
