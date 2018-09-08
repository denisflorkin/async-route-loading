import React from 'react'
import withData from './withData'

const Post = ({ data, invalid, loading }) => {
  if (loading) { return 'Loading...' }

  if (invalid) { return 'error' }

  return (
    <div key={data.title}>
      <h2>{data.title}</h2>
      <div>{data.body}</div>
    </div>
  )
}

Post.displayName = 'Post'

export default withData(
  ({ match: { params: { id } } }) => `https://jsonplaceholder.typicode.com/posts/${id}`
)(Post)
