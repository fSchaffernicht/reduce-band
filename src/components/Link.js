import React from 'react'
import gatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Link = styled(gatsbyLink)`
  color: grey;
  font-size: 1rem;
  text-decoration: none;

  &.is-active {
    font-weight: bold;
  }

  &.has-mark {
    color: white;
    background: black;
  }
`

const Mark = styled.mark`
  background: black;
`

const getClassName = (className, mark) => {
  if (mark) {
    return `${className} has-mark`
  }

  return className
}

export default (props) => {
  const {
    children,
    to,
    mark,
    onClick,
    className
  } = props

  const link = (
    <Link
      activeClassName='is-active'
      to={to}
      onClick={onClick}
      className={getClassName(className, mark)}
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
