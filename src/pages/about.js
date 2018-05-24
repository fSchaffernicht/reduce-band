import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline,
  Link
} from '../components'

export default (props) => {
  return (
    <DetailPage>
      <Section>
        <Container>
          <Headline text='Wer ist reduce?' />
          <p>Das ist: Alexis (Sänger, Bass), Felix (Gitarre), Marcel (Drums).</p>
          <p>Gut, das sagt noch nicht so viel über uns aus. wir haben uns auch grade erst gegründet von daher können wir noch gar nicht so viel über uns als Band sagen. Allerdings könnt ihr ja mal in unseren Blog reinschauen!</p>
          <Link mark to='/blog'>zum Blog</Link>
        </Container>
      </Section>
    </DetailPage>
  )
}
