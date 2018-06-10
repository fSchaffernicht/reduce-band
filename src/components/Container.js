import styled, { css } from 'styled-components'

export default styled.div`
  max-width: 960px;
  margin: auto;

  ${props => props.medium && css`
    max-width: 750px;
  `}
  
  &:after {
    content: "";
    clear: both;
    display: block;
    visibility: hidden;
    height: 0px;
  }
  
  @media (max-width: 960px) {
    padding: 1rem;
  }
`
