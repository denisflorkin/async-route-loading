import React, { Component } from 'react'

class Page3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  componentDidMount() {
    import('./bar').then(({ default: bar }) => {
      console.log(bar)
      bar()
      this.setState({ text: 'bar loaded' })
    })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        Page3
        {text}
      </div>
    )
  }
}

export default Page3
