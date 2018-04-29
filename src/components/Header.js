import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from './'

const Header = styled.div`
  padding: 2rem;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: white;
  transition: all 200ms ease-in-out;

  ${props => props.scrolling && css`
    background: ${props.theme.color.black};

    a {
      color: white;
    }
  `}
`

const Navi = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`

export default class extends React.Component {
  state = {
    scrolling: undefined
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrolling } = this.state

    if (window.pageYOffset < 100 && scrolling) {
      this.setState({ scrolling: undefined });
    } else if (window.pageYOffset > 100 && !scrolling) {
      this.setState({ scrolling: true });
    }
  }

  render () {
    const { navItems = [] } = this.props

    return (
      <Header scrolling={this.state.scrolling} innerRef={e => { this.headerRef = e }}>
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
}
