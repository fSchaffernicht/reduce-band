import styled, { css } from 'styled-components'

export default styled.section`
  padding: 10rem 0;
  margin: 10rem 0;
  
  ${props => props.dark && css`
    background: ${props => props.theme.color.black};
    color: white;
  `}
`
