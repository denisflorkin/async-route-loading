import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

const Menu = ({ routes }) => (
  <List style={{ display: 'flex' }}>
    {
      routes.filter(r => r.inMainMenu).map(route => (
        <li key={route.props.key} style={{ padding: '8px' }}>
          <Link to={route.props.path} >{route.props.key} </Link>
        </li>
      ))
    }
  </List>
)

export default Menu
