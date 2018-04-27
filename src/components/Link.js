import React from 'react'
import gatsbyLink from 'gatsby-link'
import styled, { css } from 'styled-components'

const Link = styled(gatsbyLink)`
  color: grey;
  font-size: 1rem;
  text-decoration: none;

  ${props => props.mark && css`
    color: white;
  `}

  &.is-active {
    font-weight: bold;
  }
`

const Mark = styled.mark`
  background: black;
`

export default (props) => {
  const { children, to, mark } = props

  const link = (
    <Link
      activeClassName='is-active'
      to={to}
    >
      {children}
    </Link>
  )

  if (mark) {
    return (
      <Mark>{link}</Mark>
    )
  }

  return link
}
