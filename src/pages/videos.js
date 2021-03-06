import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline,
  Link
} from '../components'

import styled, { css } from 'styled-components';

let url = ''

if (process.env.NODE_ENV === 'development') {
  url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCxaY-87Cazvpq7AIqWW8nA&maxResults=50&key=${process.env.API_KEY}`
} else {
  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCxaY-87Cazvpq7AIqWW8nA&maxResults=50&key=AIzaSyBwBJ3GxMhJTIDy6610qNAjVQpRKNadtjg'
}

const Wrapper = styled.div`
  margin-bottom: 4rem;
  overflow: hidden;
`

const SortButton = styled.div`
  background: ${props => props.theme.color.black};
  padding: 1rem;
  display: inline-block;
  color: white;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  ${props => props.active && css`
    opacity: 1;
  `}
`

const Image = styled.img`
  display: block;
  float: left;
  margin-right: 1.5rem;

  @media (max-width: 960px) {
    float: none;
  }
`

const VideoDate = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`

const VideoHeadline = styled.h3`
  margin-top: 0;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`

const filterOutChannel = (item, index) => {
  return item.snippet.title.toLowerCase() !== 'reduce'
}

const sortVideos = sortParam => (a, b) => {
  if (a.snippet.publishedAt >= b.snippet.publishedAt) {
    return sortParam === 'newest' ? -1 : 1
  } else if (a.snippet.publishedAt <= b.snippet.publishedAt) {
    return sortParam === 'newest' ? 1 : -1
  }

  return 0
}

const mapVideos = (video, index) => {
  if (!video) {
    return
  }
  
  return (
    <Wrapper key={index}>
      <Image src={video.snippet.thumbnails.medium.url} />
      <VideoDate>{new Date(video.snippet.publishedAt).toLocaleDateString()}</VideoDate>
      <VideoHeadline>{video.snippet.title}</VideoHeadline>
      <p>{video.snippet.description}</p>
      <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>zum Video</Link>
    </Wrapper>
  )
}

export default class extends React.Component {
  state = {
    videos: [],
    currentSort: 'newest'
  }

  componentDidMount () {
    if (this.state.videos && this.state.videos.length > 0) {
      return
    }

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState(() => ({
          videos: result.items.filter(filterOutChannel).sort(sortVideos('newest'))
        }))
      })
      .catch(e => {
        console.log('e', e)
      })
  }

  handleSort = (sortParam) => {
    this.setState(prevState => ({
      videos: prevState.videos.sort(sortVideos(sortParam)),
      currentSort: sortParam
    }))
  }

  render () {
    const { videos, currentSort } = this.state

    if (!videos || videos.length === 0) {
      return (
        <DetailPage>
          <Section>
            <Container>
              <Headline text='Videos' />
              <Wrapper>
                loading ...
              </Wrapper>
            </Container>
          </Section>
        </DetailPage>
      )
    }

    return (
      <DetailPage>
        <Section>
          <Container>
            <Headline text='Videos' />
            <Wrapper>
              <SortButton
                active={currentSort === 'newest'}
                onClick={() => this.handleSort('newest')}
              >
                neueste
              </SortButton>
              <SortButton
                active={currentSort === 'oldest'}
                onClick={() => this.handleSort('oldest')}
              >
                älteste
              </SortButton>
            </Wrapper>
            {
              videos && videos.map(mapVideos)
            }
          </Container>
        </Section>
      </DetailPage>
    )
  }
}
