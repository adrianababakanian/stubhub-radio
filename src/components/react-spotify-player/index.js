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
          uri="spotify:track:6rqhFgbbKwnb9MLmUQDhG6"
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default SpotifyPlayer;
