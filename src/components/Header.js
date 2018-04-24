import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: pink;
  padding: 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

export default (props) => {
  const { siteTitle } = props
  return (
    <Header>{siteTitle}</Header>
  )
}
