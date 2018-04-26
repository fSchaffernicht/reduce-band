import React from 'react'

export default ({ data }) => {
  console.log('blog template', data)
  const { markdownRemark } = data

  if (!markdownRemark) {
    return <div>no markdownRemark</div>
  }

  const { frontmatter, html } = markdownRemark

  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
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
        date(formatString: "MMMM DD, YYYY")
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
