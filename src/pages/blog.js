import React from 'react'
import styled from 'styled-components'
import { Link } from '../components'

const Wrapper = styled.div`
  padding-bottom: 1rem;
`

const Info = (props) => {
  const {
    words,
    timeToRead
  } = props

  return (
    <div>
      <span>{words} {words === 1 ? 'Wort' : 'Wörter'}</span>
      <span>Lesezeit: {timeToRead}</span>
    </div>
  )
}

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
          const { node: { frontmatter, wordCount, timeToRead } } = item
          return (
            <Wrapper key={index}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
              <span>
                <Info
                  words={wordCount.words}
                  timeToRead={timeToRead}
                />
              </span>
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
