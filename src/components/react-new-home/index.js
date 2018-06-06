import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './index.css';
import ontherun from './ontherun.png';

import NewHeader from './react-new-header';
import SpotifyPlayer from './../react-spotify-player';
import SpotifyFooter from './react-spotify-footer';
import HappeningToday from './../react-happening-today';

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
        <SpotifyPlayer uri={this.props.uri}/>
      </div>
    );
  }
}

export default NewHome;
