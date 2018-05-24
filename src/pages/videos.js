import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline,
  Link
} from '../components'

import styled from 'styled-components';

const key = API_KEY
console.log(key)
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCxaY-87Cazvpq7AIqWW8nA&key=${key}`

const Wrapper = styled.div`
  margin-bottom: 4rem;
`

const filterOutChannel = (item, index) => {
  return item.snippet.title !== 'reduce'
}

export default class extends React.Component {
  state = {
    videos: [],
  }

  componentDidMount () {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState(() => ({
          videos: result.items.filter(filterOutChannel)
        }))
      })
      .catch(e => {
        console.log('e', e)
      })
  }

  render () {
    const { videos } = this.state

    return (
      <DetailPage>
        <Section>
          <Container>
            <Headline text='Videos' />
            {
              videos.map((video, index) => {
                if (video) {
                  return (
                    <Wrapper key={index}>
                      <img src={video.snippet.thumbnails.medium.url} />
                      <h3>{video.snippet.title}</h3>
                      <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>zum Video</Link>
                    </Wrapper>
                  )
                }
              })
            }
          </Container>
        </Section>
      </DetailPage>
    )
  }
}
