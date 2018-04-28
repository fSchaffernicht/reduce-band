import React from 'react'
import styled from 'styled-components'
import {
  DetailPage,
  Section,
  Container,
  Link,
  Headline
} from '../components'

const Wrapper = styled.div`
  margin-bottom: 5rem;

  &:first-child {
    margin-top: 0;
  }
`

const BlogLink = styled(Link)`
  font-size: 2rem;
  color: white;
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
  console.log('props', props)
  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='reduce' />
          <p>Wir sind die Band Reduce aus Frankfurt am Main und wir lieben Musik.</p>
          <Link to='/about' mark>mehr erfahren</Link>
        </Container>
      </Section>
      <Section dark>
        <Container max>
          {
            props.data.allMarkdownRemark.edges.map((item, index) => {
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
          <Link to='/blog'>zum Blog</Link>
        </Container>
      </Section>
    </DetailPage>
  )
}

export const pageQuery = graphql`
  query SiteQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
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
