import React from 'react'
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import global from './global' // eslint-disable-line no-unused-vars
import Menu from './Menu'
import routes from './routes'

export const makeAppWithRouter = (Router = BrowserRouter, routerProps = {}) => (
  <Router {...routerProps}>
    <div style={{ fontFamily: 'sans-serif' }}>
      <Menu routes={routes} />
      {
        routes.map(route => (
          <Route {...route.props} />
        ))
      }
    </div>
  </Router>
)

export const AppServer = routerProps => (
  <StaticRouter {...routerProps}>
    <div style={{ fontFamily: 'sans-serif' }}>
      <Menu routes={routes} />
      {
        routes.map(route =>
          <Route {...route.props} />
        )
      }
    </div>
  </StaticRouter>
)

export default () => makeAppWithRouter()
export const AppSSR = props => makeAppWithRouter(StaticRouter, { context: {}, ...props })
