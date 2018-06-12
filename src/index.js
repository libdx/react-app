import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'
import setupStore from './setup_store'
import './styles/common.css'

const { store, persistor } = setupStore()

const root = document.getElementById('root')
const element =
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>

ReactDOM.render(element, root)

