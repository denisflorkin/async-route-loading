import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

const Menu = ({ routes }) => (
  <List style={{ display: 'flex' }}>
    {
      routes.filter(r => r.inMainMenu).map(({ props }) => (
        <li key={props.key} style={{ padding: '8px' }}>
          <Link to={props.path} >{props.key} </Link>
        </li>
      ))
    }
  </List>
)

export default Menu
