import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import global from './global' // eslint-disable-line no-unused-vars
import Menu from './Menu'
import serverRoutes from './routesServer'

export const AppSSR = routerProps => (
  <StaticRouter {...routerProps}>
    <div style={{ fontFamily: 'sans-serif' }}>
      <Menu routes={serverRoutes} />
      {
        serverRoutes.map(route =>
          <Route {...route.props} />
        )
      }
    </div>
  </StaticRouter>
)

export default AppSSR
