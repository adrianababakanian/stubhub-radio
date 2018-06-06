import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import NewHome from './components/react-new-home';
import SpotifyPlayer from './components/react-spotify-player';
import Performer from './components/react-performer';
import Trigger from './components/trigger';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SpotifyPlayer />
          <NavLink to="/radio/vance-joy">
          <Trigger />
          </NavLink>
          <Route path="/radio" component={NewHome} />
          <Route path="/radio/vance-joy" component={Performer} />
        </div>
      </Router>
    );
  }
}

export default App;
