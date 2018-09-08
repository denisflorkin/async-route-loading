import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

const selector = '#root'

hydrate(
  <App />,
  document.querySelector(selector)
)
