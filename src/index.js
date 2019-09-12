import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { Provider } from 'react-redux'
import configureStore from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/products' component={Products} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
