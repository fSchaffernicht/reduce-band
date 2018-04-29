import React from 'react'
import gatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Link = styled(gatsbyLink)`
  font-size: 1rem;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &.is-active {
    color: white;
    background: ${props => props.theme.color.black};
  }

  &.is-mark {
    color: white;
    background: ${props => props.theme.color.black};
  }

  &.is-invert {
    background: white;
    color: ${props => props.theme.color.black};
  }
`

const getClassName = (className, mark, invert) => {
  let classes = className

  if (mark) {
    classes += ` is-mark`
  }

  if (invert) {
    classes += ` is-invert`
  }

  return classes
}

export default (props) => {
  const {
    children,
    to,
    mark,
    invert,
    onClick,
    className
  } = props

  const link = (
    <Link
      exact
      activeClassName='is-active'
      to={to}
      onClick={onClick}
      className={getClassName(className, mark, invert)}
    >
      {children}
    </Link>
  )

  if (mark) {
    return (
      <mark>{link}</mark>
    )
  }

  return link
}
