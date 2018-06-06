import React, {Component} from 'react';
import ReactSpotifyPlayer from 'react-spotify-player';
import './index.css';

class SpotifyPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const size = {
      width: 1180,
      height: 80
    };
    const view = 'list';
    const theme = 'black';

    return (
      <div className="player">
        <ReactSpotifyPlayer
          // uri="spotify:track:11dFghVXANMlKmJXsNCbNl"
          // uri="spotify:album:0geTzdk2InlqIoB16fW9Nd"
          // uri="spotify:album:5ZX4m5aVSmWQ5iHAPQpT71"
          // uri="spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
           uri="spotify:artist:10exVja0key0uqUkk6LJRT"
          // uri={"spotify:artist:" + this.props.uri}
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default SpotifyPlayer;
