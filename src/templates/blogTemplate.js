import React from 'react'
import styled from 'styled-components'
import {
  DetailPage,
  Section,
  Container,
  Headline,
  Link
} from '../components'

const Html = styled.div`
  p {
    font-size: 110%;
    line-height: 1.6;
  }
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
  console.log('mark', data)
  const { markdownRemark } = data

  if (!markdownRemark) {
    return <div>no markdownRemark</div>
  }

  const { frontmatter, html } = markdownRemark

  return (
    <DetailPage>
      <Section>
        <Container medium>
          <Link to='/blog'>{`< zur Übersicht`}</Link>
          <Headline text={frontmatter.title} />
          <StyledDate>{frontmatter.date}</StyledDate>
          <Image src={frontmatter.thumbnail} />
          <Html dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Section>
    </DetailPage>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
