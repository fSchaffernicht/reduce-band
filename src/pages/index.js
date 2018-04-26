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
    <div>
      <h1>home</h1>
      <p>Hier kommt unser Blog hin</p>
      <Link to='/blog'>blog</Link>
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
