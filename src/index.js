import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './styles/common.css'

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
