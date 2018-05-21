import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from './reducers'
import './styles/common.css'

const store = createStore(reducer)

const root = document.getElementById('root')
const element =
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(element, root)

// tmp
import { searchMovies } from './actions'
store.dispatch(searchMovies('abc'))

