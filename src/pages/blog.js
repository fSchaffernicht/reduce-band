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
    data: { allMarkdownRemark, allImageSharp }
  } = props

  console.log('props', props)

  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='Band-Tage-Buch' />
          {
            allMarkdownRemark.edges.map((item, index) => {
              const { node: { frontmatter, fields } } = item

              const image = allImageSharp.edges.find(x => x.node.id.includes(frontmatter.thumbnail))
              return (
                <BlogPreview
                  key={index}
                  title={frontmatter.title}
                  date={frontmatter.date}
                  thumbnail={image.node.resolutions.src}
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
    allImageSharp(sort: {fields: [id]}) {
      edges {
        node {
          id
          resolutions(width: 300) {
            src
          }
        }
      }
    }
  }
`
