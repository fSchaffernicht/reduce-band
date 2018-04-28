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
          <Headline text='Wer ist reduce?' />
          <p>Das sind wir! Also bestehend aus: Alexis (Sänger, Bass), Felix (Gitarre), Marcel (Drums).</p>
          <p>Gut, das sagt noch nicht so viel über uns aus. Aber ist es wichtig wer wir sind?</p>
        </Container>
      </Section>
    </DetailPage>
  )
}
