import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import global from './global' // eslint-disable-line no-unused-vars
import Menu from './Menu'
import clientRoutes from './routesClient'

export const App = props => (
  <BrowserRouter>
    <div style={{ fontFamily: 'sans-serif' }}>
      <Menu routes={clientRoutes} />
      {
        clientRoutes.map(route => (
          <Route {...route.props} />
        ))
      }
    </div>
  </BrowserRouter>
)

export default App
