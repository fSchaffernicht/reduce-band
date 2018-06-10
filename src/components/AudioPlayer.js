import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export default (props) => {
  const {
    title,
    source
  } = props

  return (
    <Wrapper>
      <h3>
        {title}
      </h3>
      <audio controls='controls'>
        <source src={source} type='audio/mpeg' /> Your browser does not support the audio element.
      </audio>
    </Wrapper>
  )
}
