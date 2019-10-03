import App, { Container } from 'next/app'
import Router, { withRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import withStyles from 'styles'

class GotboardApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { pathname }
    } = this.props

    const hocs = [withStyles]
    const ComponentWithHOCs = hocs.reduce((WrappedComponent, withHOC) => {
      return withHOC(WrappedComponent)
    }, Component)

    const providers = [
    ]
    const ComponentWithProviders = providers.reduce((WrappedComponent, Provider) => {
      return props => (
        <Provider>
          <WrappedComponent {...props} />
        </Provider>
      )
    }, ComponentWithHOCs)

    return (
      <Container>
        <ComponentWithProviders {...pageProps} />
      </Container>
    )
  }
}

export default withRouter(GotboardApp)
