import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline,
  Link
} from '../components'

import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export default (props) => {
  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='Kontakt' />
          <p>Die beste Kontaktaufnahme ist immer noch über E-Mail aber Ihr könnt uns auch auf Twitter oder Facebook erreichen :)</p>
          <Wrapper>
            <Link href='mailto:reduce.band@gmail.com'>reduce.band@gmail.com</Link>
          </Wrapper>
          <Wrapper>
            <Link href='https://www.facebook.com/reduceBand/'>facebook</Link>
          </Wrapper>
          <Wrapper>
            <Link href='https://twitter.com/ReduceBand'>twitter</Link>
          </Wrapper>
        </Container>
      </Section>
    </DetailPage>
  )
}
