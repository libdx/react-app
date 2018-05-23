import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import createDebounce from 'redux-debounced';
import App from './app'
import reducer from './reducers'
import './styles/common.css'

const reduxDebounce = createDebounce()

const store = createStore(
    reducer,
    {},
    applyMiddleware(reduxDebounce, ReduxPromise)
)

const root = document.getElementById('root')
const element =
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(element, root)

