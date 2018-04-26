import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: black;
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
`

export default (props) => {
  const { siteTitle } = props

  return (
    <Header>{siteTitle}</Header>
  )
}
