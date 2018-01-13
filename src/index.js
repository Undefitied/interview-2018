import 'babel-polyfill'
import './styles/main.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './configureStore'
import App from './components/App'
import RepRoute from './routes/RepRoute'

const store = configureStore

render(
    <div>
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/rep/:slug" component={RepRoute} />
                </div>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
)