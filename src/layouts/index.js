import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'

import Header from '../components/header'
import './index.css'
console.log('theme', theme)
const Wrapper = styled.div`
  background: ${props => props.theme.color.background};
`

const Layout = ({ children, data }) => (
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
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </Wrapper>
  </ThemeProvider>
)

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
