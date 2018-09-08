import React from 'react'

const List = ({ children, style }) => (
  <ul style={{ listStyle: 'none', ...style }}>
    {children}
  </ul>
)

export default List
