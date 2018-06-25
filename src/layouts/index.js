import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import './index.css'
import theme from './theme'

import { Header } from '../components'

const Wrapper = styled.div`

`

const Back = styled.div`
  position: absolute;
`

const navItems = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/about/',
    text: 'About'
  },
  {
    href: '/videos/',
    text: 'Videos'
  },
  {
    href: '/blog/',
    text: 'Blog'
  },
  {
    href: '/contact/',
    text: 'Kontakt'
  }
]

const Layout = (props) => {
  const { children, data } = props

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
        <Header navItems={navItems} />
        {children()}
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
