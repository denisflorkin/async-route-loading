import React, { Component } from 'react'

const makeFetcher = (consumsersFetchUrl, consumsersFetchData) =>
  () =>
    fetch(consumsersFetchUrl, consumsersFetchData)
      .then(response => response.json())

class JSONDataFetcher extends Component {
  constructor(props) {
    super(props)

    const { staticContext, ConsumersComponent } = this.props

    let data = null
    let loading = true
    let invalid = false
    let received = false

    if (staticContext && staticContext.data[ConsumersComponent.displayName]) {
      data = staticContext.data[ConsumersComponent.displayName]
      loading = false
      invalid = false
      received = true
    } else if (
      !staticContext && window && window.DATA && window.DATA[ConsumersComponent.displayName]
    ) {
      data = window.DATA[ConsumersComponent.displayName]
      loading = false
      invalid = false
      received = true
    }

    this.state = {
      loading,
      invalid,
      received,
      fetchedData: data,
    }
  }

  componentWillMount() {
    const {
      ConsumersComponent,
      consumsersFetchUrl,
      consumsersFetchData = {},
      staticContext,
    } = this.props

    const { received } = this.state

    if (staticContext && staticContext.ssr) {
      if (!staticContext.data[ConsumersComponent.displayName]) {
        const promise = makeFetcher(consumsersFetchUrl, consumsersFetchData)

        staticContext.data[ConsumersComponent.displayName] = promise
      }
    } else if (!staticContext) {
      if (!received) { // constructor set it if data have been served by server
        makeFetcher(consumsersFetchUrl, consumsersFetchData)()
          .catch(e => this.setState({
            ...this.state,
            fetchedData: null,
            loading: false,
            invalid: (e || true),
            received: false,
          }))
          .then(x => this.setState({
            ...this.state,
            fetchedData: x,
            loading: false,
            invalid: false,
            received: true,
          }))
      }
    }
  }

  render() {
    const {
      ConsumersComponent,
      consumsersFetchUrl,
      consumsersFetchData,
      ...rest
    } = this.props

    const {
      loading,
      invalid,
      fetchedData,
      received,
    } = this.state

    return (
      <ConsumersComponent
        {...rest}
        loading={loading}
        invalid={invalid}
        data={fetchedData}
        received={received}
      />
    )
  }
}

const withData = (fetchUrl, fetchData) => Comp => props => (
  <JSONDataFetcher
    {...props}
    ConsumersComponent={Comp}
    consumsersFetchUrl={fetchUrl && fetchUrl(props)}
    consumsersFetchData={fetchData && fetchData(props)}
  />
)

export default withData
