import React from 'react'
import styled from 'styled-components'
import { Link } from '../components'

const Wrapper = styled.div`
  padding-bottom: 1rem;
`

export default (props) => {
  console.log('props', props)
  const {
    data: { allMarkdownRemark }
  } = props

  return (
    <div>
      <h1>blog</h1>
      {
        allMarkdownRemark.edges.map((item, index) => {
          const { node: { frontmatter } } = item
          return (
            <Wrapper key={index}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </Wrapper>
          )
        })
      }
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
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
