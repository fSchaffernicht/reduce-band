import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline
} from '../components'

export default (props) => {
  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='Kontakt' />
          <p>Die beste Kontaktaufnahme ist immer noch über E-Mail :)</p>
          <a href='mailto:felix@schaffernicht.com'>mail</a>
        </Container>
      </Section>
    </DetailPage>
  )
}
