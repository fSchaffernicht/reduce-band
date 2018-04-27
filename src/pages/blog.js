import React from 'react'
import styled from 'styled-components'
import { DetailPage, Link, Headline } from '../components'

const Wrapper = styled.div`
  margin-top: 5rem;
`

const BlogLink = styled(Link)`
  font-size: 2rem;
  color: ${props => props.theme.color.black};
  font-family: 'Permanent Marker', cursive;
`

const InfoWrapper = styled.div`
  mark {
    background: #282c34;
    color: white;
  }
`

const Info = (props) => {
  const {
    text
  } = props

  return (
    <InfoWrapper>
      <span>{text}</span>
    </InfoWrapper>
  )
}

export default (props) => {
  const {
    data: { allMarkdownRemark }
  } = props

  console.log(allMarkdownRemark)

  return (
    <DetailPage>
      <Headline text='Band-Tage-Buch' />
      {
        allMarkdownRemark.edges.map((item, index) => {
          const { node: { frontmatter } } = item
          return (
            <Wrapper key={index}>
              <BlogLink to={frontmatter.path}>
                {frontmatter.title}
              </BlogLink>
              <Info text={frontmatter.date} />
            </Wrapper>
          )
        })
      }
    </DetailPage>
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
