import React, { Component } from 'react'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      invalid: false,
      received: false,
      post: null,
    }
  }

  componentDidMount() {
    // const { loading, invalid, received } = this.state
    const { match: { params: { id } } } = this.props


    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => this.setState({
        post,
        received: true,
        loading: false,
        invalid: false,
      }))
      .catch(e => this.setState({ invalid: (e || true), loading: false }))
  }

  render() {
    const { post } = this.state
    const { loading, invalid } = this.state

    if (invalid) {
      return 'error'
    }

    if (!post || loading) {
      return 'loading'
    }

    return (
      <div key={post.title}>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
      </div>
    )
  }
}

export default Post
