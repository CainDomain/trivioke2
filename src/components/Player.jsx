import React from 'react';
import axios from 'axios';
import { Player } from 'video-react';

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
    const rand = Math.floor(Math.random() * 43) + 1;
    this.setState({
      video: this.state.videos[rand],
    });
  }

  //
  render() {
    return (
      <div>
        <Player playsInline>
          <iframe fluid="true" className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.video.uri}`} allowFullScreen />
        </Player>
        <button onClick={this.changeVideo}>
          Activate Lasers
        </button>
      </div>
    );
  }
}
export default VideoPlayer;
