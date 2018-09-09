import React, { Component } from 'react'

class Page2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  componentDidMount() {
    import('./foo').then(({ default: foo }) => {
      console.log(foo)
      foo()
      this.setState({ text: 'foo loaded' })
    })
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
