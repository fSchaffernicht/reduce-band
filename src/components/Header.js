import React from 'react'
import styled from 'styled-components'
import { Link } from './'

const Header = styled.div`
  padding: 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Navi = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`

export default (props) => {
  const { navItems = [] } = props

  return (
    <Header>
      <Navi>
        {
          navItems.map((link, index) => (
            <Link key={index} to={link.href}>{link.text}</Link>
          ))
        }
      </Navi>
    </Header>
  )
}
