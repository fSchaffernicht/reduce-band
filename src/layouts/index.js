import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import { Header } from '../components'
import './index.css'

const Wrapper = styled.div`
  margin-top: 300px;
`

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  padding: 0 0.5rem;
`

const Layout = (props) => {
  const { children, data } = props
  console.log('layout props', props)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children()}
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
