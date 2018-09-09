import React from 'react'
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import routes from './routes'

export const makeAppWithRouter = (Router = BrowserRouter, routerProps = {}) => (
  console.log('routerProps', routerProps, '\n') ||
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
          // console.log('route.componentPath', route.componentPath, '\n')
          // console.log('new route.props.component', new route.props.component(), '\n')

          <Route {...route.props} component={route.component} />
        )
      }
    </div>
  </StaticRouter>
)

export default () => makeAppWithRouter()
export const AppSSR = props => makeAppWithRouter(StaticRouter, { context: {}, ...props })
