import React from 'react'
import { withPrefix } from 'gatsby-link'

import {
  DetailPage,
  Section,
  Container,
  Link,
  Headline,
  AudioPlayer,
  BlogPreview
} from '../components'

export default (props) => {
  const {
    data: { allMarkdownRemark, allImageSharp }
  } = props

  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='reduce' />
          <AudioPlayer
            title='Reduce - Demo'
            source={withPrefix('/assets/reduce-final.mp3')}
          />
          <AudioPlayer
            title='City - Demo'
            source={withPrefix('/assets/city-final.mp3')}
          />
          <Link to='/about' mark>mehr erfahren</Link>
        </Container>
      </Section>
      {/* <Section dark>
        <Container>
          <Headline type='h2' text='neues' />
          {
            allMarkdownRemark.edges.map((item, index) => {
              const { node: { frontmatter, fields } } = item
              const image = allImageSharp.edges.find(x => x.node.id.includes(frontmatter.thumbnail))

              return (
                <BlogPreview
                  title={frontmatter.title}
                  date={frontmatter.date}
                  thumbnail={image.node.resolutions.src}
                  path={fields.slug}
                />
              )
            })
          }
        </Container>
        <Container>
          <Link mark invert to='/blog'>zum Blog</Link>
        </Container>
      </Section> */}
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
