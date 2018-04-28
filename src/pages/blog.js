import React from 'react'

import {
  DetailPage,
  Section,
  Container,
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
          <Headline text='Band-Tage-Buch' />
          {
            allMarkdownRemark.edges.map((item, index) => {
              const { node: { frontmatter, fields } } = item
              return (
                <BlogPreview
                  title={frontmatter.title}
                  date={frontmatter.date}
                  thumbnail={frontmatter.thumbnail}
                  path={fields.slug}
                />
              )
            })
          }
        </Container>
      </Section>
    </DetailPage>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            path
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
