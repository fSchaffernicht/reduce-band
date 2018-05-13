import React from 'react'
import Link from 'gatsby-link'
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
          <p>Gut, das sagt noch nicht so viel über uns aus. wir haben uns auch grade erst gegründet von daher können wir noch gar nicht so viel über uns als Band sagen. Allerdings könnt ihr ja mal in unseren <Link to='/blog'>Blog</Link> reinschauen!</p>
        </Container>
      </Section>
    </DetailPage>
  )
}
