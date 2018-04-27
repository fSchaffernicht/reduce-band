import React from 'react'
import styled from 'styled-components'
import { DetailPage, Headline } from '../components'

const Html = styled.div`
  img {
    width: 100%;
  }
`

const Image = styled.img`
  margin: 2rem 0;
  width: 100%;
`

const StyledDate = styled.div`
  font-size: 1.5rem;
`

export default ({ data }) => {
  const { markdownRemark } = data

  if (!markdownRemark) {
    return <div>no markdownRemark</div>
  }

  const { frontmatter, html } = markdownRemark

  return (
    <DetailPage>
      <Headline text={frontmatter.title} />
      <StyledDate>{frontmatter.date}</StyledDate>
      <Image src={frontmatter.thumbnail} />
      <Html dangerouslySetInnerHTML={{ __html: html }} />
    </DetailPage>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM YYYY")
        thumbnail
      }
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
    }
  }
`
