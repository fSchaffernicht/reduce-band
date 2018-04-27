import React from 'react'
import styled from 'styled-components'
import { Link } from '../components'

const Wrapper = styled.div`
  padding: 1rem;
`

export default (props) => {
  console.log('props', props)
  const { data } = props
  return (
    <div className='transition-item detail-page'>
      <h1>reduce</h1>
      <p>Wir sind die Band Reduce aus Frankfurt am Main und wir lieben Musik.</p>
      <Link to='/about' mark>mehr erfahren</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query SiteQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`
