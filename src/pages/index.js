import React from 'react'
import { DetailPage, Link, Headline } from '../components'

export default (props) => {
  return (
    <DetailPage>
      <Headline text='reduce' />
      <p>Wir sind die Band Reduce aus Frankfurt am Main und wir lieben Musik.</p>
      <Link to='/about' mark>mehr erfahren</Link>
    </DetailPage>
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
