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
