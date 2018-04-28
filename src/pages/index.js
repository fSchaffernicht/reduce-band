import React from 'react'
import styled from 'styled-components'
import {
  DetailPage,
  Section,
  Container,
  Link,
  Headline,
  BlogPreview
} from '../components'

export default (props) => {
  const {
    data: { allMarkdownRemark }
  } = props

  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='reduce' />
          <p>Wir sind die Band Reduce aus Frankfurt am Main und wir lieben Musik.</p>
          <Link to='/about' mark>mehr erfahren</Link>
        </Container>
      </Section>
      <Section dark>
        <Container max>
          {
            allMarkdownRemark.edges.map((item, index) => {
              const { node: { frontmatter, fields } } = item
              return (
                <BlogPreview
                  invert
                  title={frontmatter.title}
                  date={frontmatter.date}
                  thumbnail={frontmatter.thumbnail}
                  path={fields.slug}
                />
              )
            })
          }
          <Link mark invert to='/blog'>zum Blog</Link>
        </Container>
      </Section>
    </DetailPage>
  )
}

export const pageQuery = graphql`
  query SiteQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            date(formatString: "DD MMMM YYYY")
          }
          wordCount {
            paragraphs
            sentences
            words
          }
          timeToRead
        }
      }
    }
  }
`
