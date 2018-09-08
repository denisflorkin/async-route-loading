import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import routes from './routes'

const App = () => (
  <BrowserRouter>
    <div style={{ fontFamily: 'sans-serif' }}>
      <Menu routes={routes} />
      {
        routes.map(route => (
          <Route {...route.props} />
        ))
      }
    </div>
  </BrowserRouter>
)

export default App
