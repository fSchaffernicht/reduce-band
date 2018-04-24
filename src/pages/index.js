import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
`

const StyledLink = styled(Link)`
  color: green;
  font-size: 2rem;
`

export default (props) => {
  console.log('props', props)
  const { data } = props
  const { allSitePage } = data
  return (
    <div>
      {
        allSitePage.edges.map((item, index) => {
          return (
            <Wrapper key={index}>
              <StyledLink to={item.node.id.substring(9)}>
                {item.node.id}
              </StyledLink>
            </Wrapper>
          )
        })
      }
      {
        props.children
      }
    </div>
  )
}

export const pageQuery = graphql`
  query Test {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`
