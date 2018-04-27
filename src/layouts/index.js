import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageTransition from 'react-router-page-transition';

import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import { Header, Link } from '../components'
import './index.css'

const Wrapper = styled.div`
  margin-top: 300px;
`

const Container = styled.div`
  margin: auto;
  max-width: 760px;
  padding: 0 0.5rem;
`

const navItems = [
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: '/contact',
    text: 'Kontakt'
  }
]

const Layout = (props) => {
  console.log('props', props)
  const { children, data, location } = props

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
        <Container>
          {
            props.location.pathname !== '/' &&
            <Link to='/'>{'< zurück'}</Link>
          }
          <PageTransition timeout={200}>
            {children()}
          </PageTransition>
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
