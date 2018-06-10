import styled, { css } from 'styled-components'

export default styled.section`
  padding: 8rem 0;
  margin: 8rem 0;
  
  ${props => props.dark && css`
    background: ${props => props.theme.color.black};
    color: white;

    a {
      color: white;
    }
  `}

  @media (max-width: 960px) {
    padding: 5rem 0;
    margin: 5rem 0;
  }

  @media (max-width: 500px) {
    padding: 3rem 0;
    margin: 3rem 0;
  }
`
