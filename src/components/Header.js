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

  @media (max-width: 960px) {
    padding: 0;
    display: block;
    position: fixed;
    background: ${props => props.theme.color.black};

    a {
      color: white;
    }
  }
`

const Wrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

const Hamburger = styled.div`
  margin: 1rem;
  display: none;
  color: white;

  @media (max-width: 960px) {
    display: flex;
  }
`

const Navi = styled.nav`
  width: 350px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    display: block;
    width: 100%;

    a {
      display: inline-block;
      width: 100%;
      padding: 1rem;
    }
  }
`

export default class extends React.Component {
  state = {
    scrolling: undefined,
    isVisible: undefined
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)

    if (window.innerWidth >= 960) {
      this.setState({ isVisible: true })  
    } else {
      this.setState({ isVisible: false })  
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)    
  }

  handleResize = () => {
    if (window.innerWidth >= 960 && !this.state.isVisible) {
      this.setState(prevState => ({
        isVisible: true
      }))
    } else if (window.innerWidth <= 960 && this.state.isVisible) {
      this.setState(prevState => ({
        isVisible: false
      }))
    }
  }

  handleScroll = () => {
    const { scrolling } = this.state

    if (window && window.pageYOffset < 100 && scrolling) {
      this.setState({ scrolling: undefined });
    } else if (window && window.pageYOffset > 100 && !scrolling) {
      this.setState({ scrolling: true });
    }
  }

  toggleNav = () => {
    if (window && window.innerWidth <= 960) {
      this.setState(prevState => ({
        isVisible: !prevState.isVisible
      }))
    }
  }

  render () {
    const { navItems = [] } = this.props

    return (
      <Header scrolling={this.state.scrolling} innerRef={e => { this.headerRef = e }}>
        <Wrapper>
          <Hamburger onClick={this.toggleNav}>Menu</Hamburger>
        </Wrapper>
        {
          this.state.isVisible &&
          <Navi>
            {
              navItems.map((link, index) => (
                <Link onClick={this.toggleNav} key={index} to={link.href}>{link.text}</Link>
              ))
            }
          </Navi>
        }
      </Header>
    )
  }
}
