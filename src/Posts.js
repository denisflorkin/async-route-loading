import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'
import withData from './withData'

const truncateIfNeeded = string => (string.length >= 50
  ? `${string.slice(0, 46)}...`
  : string
)

const Posts = ({ data, invalid, loading }) => {
  if (loading) { return 'Loading...' }

  if (invalid) { return 'invalid...' }

  return data.slice(0, 15).map(post => (
    <List>
      <Link to={`/post/${post.id}`}>
        {truncateIfNeeded(post.title)}
      </Link>
    </List>
  ))
}

Posts.displayName = 'Posts'

export default withData(
  () => 'https://jsonplaceholder.typicode.com/posts'
)(Posts)
