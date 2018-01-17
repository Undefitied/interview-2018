import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeRoute from './routes/HomeRoute'
import RepRoute from './routes/RepRoute'
import NotFoundRoute from './routes/NotFoundRoute'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore

export default class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <Router>
              <div>
                <Switch>
                  <Route exact path='/' component={HomeRoute} />
                  <Route path='/rep/:slug' component={RepRoute} />
                  <Route component={NotFoundRoute} />
                </Switch>
              </div>
            </Router>
          </Provider>
        )
    }
}
