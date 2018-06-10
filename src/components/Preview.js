import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Wrapper = styled.figure`
  margin: 0;
  padding: 0;
  margin-bottom: 3rem;
  width: 30%;
  float: left;
  margin-right: 3rem;

  &:nth-of-type(3n+3) {
    margin-right: 0;
  }

  @media (max-width: 960px) {
    width: 49%;
    margin-right: 2%;

    &:nth-of-type(2n+2) {
      margin-right: 0;
    }

    &:nth-of-type(3n+3) {
      margin-right: 2%;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 1rem;
  transition: all 200ms;  

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
      transform: scale(1.05);
    }
  }
`

const BlogLink = styled(Link)`
  font-size: 1.8rem;
  line-height: 1;
  font-family: 'Permanent Marker', cursive;
  opacity: 1;
  transition: all 200ms;

  &:hover {
    opacity: 0.8;
  }
`

const InfoWrapper = styled.div`
  margin-top: 1rem;

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
    thumbnail
  } = props

  return (
    <Wrapper>
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
