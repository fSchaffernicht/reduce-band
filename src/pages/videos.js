import React from 'react'
import {
  DetailPage,
  Section,
  Container,
  Headline
} from '../components'
const key = 'AIzaSyBwBJ3GxMhJTIDy6610qNAjVQpRKNadtjg'
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2OtJK_WhH3VxbfAqFIKqCA&key=${key}`
export default class extends React.Component {
  state = {
    videos: [],
    id: undefined
  }

  componentDidMount () {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState(() => ({
          videos: result.items
        }))
      })
      .catch(e => {
        console.log('e', e)
      })
  }

  handleShow = (id) => {
    this.setState(() => ({
      id
    }))
  }

  render () {
    return (
      <DetailPage>
        <Section>
          <Container>
            <Headline text='Videos' />
            {
              this.state.videos.map((video, index) => {
                console.log('video', video)
                if (video) {
                  return (
                    <div>
                      <img src={video.snippet.thumbnails.default.url} />
                      <h3>{video.snippet.title}</h3>
                      <p>{video.snippet.description}</p>
                      <div onClick={() => this.handleShow(video.id.videoId)}>go to video</div>
                    </div>
                  )
                }
              })
            }
            {
              this.state.id &&
              <iframe id="ytplayer" type="text/html" width="720" height="405"
                src={`https://www.youtube.com/embed/${this.state.id}`}
                frameBorder="0" allowFullScreen />
            }
          </Container>
        </Section>
      </DetailPage>
    )
  }
}
