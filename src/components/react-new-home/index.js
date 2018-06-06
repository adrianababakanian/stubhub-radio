import React, {Component} from 'react';
import './index.css';
import ontherun from './ontherun.png';

import NewHeader from './react-new-header';
import SpotifyPlayer from './../react-spotify-player';
import SpotifyFooter from './react-spotify-footer';
import HappeningToday from './../react-happening-today';

// import HappeningToday from './../../apps/home/happening-today';

class NewHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewHeader />
        <div className="ad"><img src={ontherun} className="adPng"/></div>
        <HappeningToday />
        <SpotifyFooter />
        <SpotifyPlayer />
      </div>
    );
  }
}

export default NewHome;
