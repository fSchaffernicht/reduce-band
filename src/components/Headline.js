import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 5rem;
  line-height: 1;
  position: relative;
  animation: slide-from-left 300ms cubic-bezier(0.42, 0, 0.25, 0.98);
`

const H2 = styled.h2`
  font-family: 'Permanent Marker', cursive;
`

const types = {
  h1: H1,
  h2: H2
}

export default (props) => {
  const {
    type = 'h1',
    text
  } = props

  return React.createElement(types[type], null, text)
}
