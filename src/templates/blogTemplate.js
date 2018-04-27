import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.div`
  font-size: 2rem;
`

export default ({ data }) => {
  const { markdownRemark } = data

  if (!markdownRemark) {
    return <div>no markdownRemark</div>
  }

  const { frontmatter, html } = markdownRemark

  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{frontmatter.title}</h1>
        <StyledDate>{frontmatter.date}</StyledDate>
        <img src={frontmatter.thumbnail} />
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
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
