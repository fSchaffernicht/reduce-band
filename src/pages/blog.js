import React from 'react'
import styled from 'styled-components'
import { Link } from '../components'

const Wrapper = styled.div`
  padding-bottom: 1rem;
`

const Info = (props) => {
  const {
    words,
    date
  } = props

  return (
    <div>
      <span>{words} {words === 1 ? 'Wort' : 'Wörter'}</span>|<span>{date}</span>
    </div>
  )
}

export default (props) => {
  const {
    data: { allMarkdownRemark }
  } = props

  console.log(allMarkdownRemark)

  return (
    <div>
      <h1>blog</h1>
      {
        allMarkdownRemark.edges.map((item, index) => {
          const { node: { frontmatter, wordCount } } = item
          return (
            <Wrapper key={index}>
              <Link to={frontmatter.path}>
                <h3>{frontmatter.title}</h3>
              </Link>
              <span>
                <Info
                  words={wordCount.words}
                  date={frontmatter.date}
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
