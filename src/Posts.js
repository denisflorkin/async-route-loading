import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from './List'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      invalid: false,
      received: false,
      posts: [],
    }
  }

  componentDidMount() {
    // const { loading, invalid, received } = this.state

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => console.log(posts) || posts)
      .then(posts => this.setState({
        posts: posts.slice(0, 15),
        received: true,
        loading: false,
        invalid: false,
      }))
  }

  render() {
    const { posts } = this.state

    return posts.map(post => (
      <List>
        <Link to={`/post/${post.id}`}>
          {
            post.title.length >= 50
              ? `${post.title.slice(0, 46)}...`
              : post.title
          }
        </Link>
      </List>
    ))
  }
}

export default Posts
