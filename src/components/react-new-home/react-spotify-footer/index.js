import React, {Component} from 'react';
import './index.css';

class SpotifyFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="spotifyFooter">
        <div className="albumArt"></div>
      </div>
    );
  }
}

export default SpotifyFooter;
