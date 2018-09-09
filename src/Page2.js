import React, { Component } from 'react'
import Loadable from 'react-loadable'

import('./foo').then((x) => {
  console.log(x)
})


class Page2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  componentDidMount() {
    import('./foo').then(x => (
      console.log(x) ||
      this.setState({ text: 'foo loaded' })
    ))
  }

  render() {
    const { text } = this.state
    return (
      <div>
        Page2
        { text }
      </div>
    )
  }
}

export default Page2
