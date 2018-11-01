import React from 'react';
import axios from 'axios';
// import { Player } from 'video-react';
import Iframe from 'react-iframe';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {
        song: 'Dolly Parton - Jolene Karaoke Lyrics',
        uri: '8ff0szPBM2M',
      },
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount() {
    axios({ method: 'GET', url: '/songs', headers: { 'Access-Control-Allow-Origin': '*' } })
      .then((res) => {
        this.setState({
          video: res.data[3],
          videos: res.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeVideo() {
    const { videos } = this.state;
    const rand = Math.floor(Math.random() * 43) + 1;
    this.setState({
      video: videos[rand],
    });
  }

  //
  render() {
    const { video } = this.state;
    return (
      <div>
        {/* <Player> */}
        <button type="button" onClick={this.changeVideo}>
          Activate Lasers
        </button>
        <Iframe
          url={`https://www.youtube.com/embed/${video.uri}`}
          playsInline
          fluid="true"
          width="500px"
          height="500px"
          className="embed-responsive-item"
          allowFullScreen
        />
        {/* </Player> */}
      </div>
    );
  }
}
export default VideoPlayer;
