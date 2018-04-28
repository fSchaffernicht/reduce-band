import React from 'react'
import styled, { css } from 'styled-components'
import Link from './Link'

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 30%;
  float: left;
  margin-right: 2rem;

  ${props => props.invert && css`
    color: white;
  `}
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    margin: 0;
    transform: scale(1);
    transition: all 200ms;    
  }

  &:hover {
    opacity: 0.8;
    img {
      transform: scale(1.1);
    }
  }
`

const BlogLink = styled(Link)`
  font-size: 2rem;
  color: ${props => props.theme.color.black};
  font-family: 'Permanent Marker', cursive;
  transition: all 200ms;
`

const InfoWrapper = styled.div`
  mark {
    background: ${props => props.theme.color.black};
    color: white;
  }
`

const Thumbnail = styled.img`
  margin: 2rem 0;
  width: 100%;
`

const Info = (props) => {
  const {
    text
  } = props

  return (
    <InfoWrapper>
      <span>{text}</span>
    </InfoWrapper>
  )
}

export default (props) => {
  const {
    path,
    title,
    date,
    thumbnail,
    invert
  } = props

  return (
    <Wrapper invert={invert}>
      <BlogLink to={path}>
        <ImageWrapper>
          <Thumbnail src={thumbnail} />
        </ImageWrapper>
        {title}
      </BlogLink>
      <Info text={date} />
    </Wrapper>
  )
}
