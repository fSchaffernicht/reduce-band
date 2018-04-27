import React from 'react'
import { DetailPage, Headline } from '../components'

export default (props) => {
  return (
    <DetailPage>
      <Headline text='Kontakt' />
      <p>Die beste Kontaktaufnahme ist immer noch über E-Mail :)</p>
      <a href='mailto:felix@schaffernicht.com'>mail</a>
    </DetailPage>
  )
}
