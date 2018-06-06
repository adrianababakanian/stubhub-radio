import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import NewHome from './components/react-new-home';
import SpotifyPlayer from './components/react-spotify-player';
import Performer from './components/react-performer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/radio/ed-sheeran">
            <SpotifyPlayer uri="10exVja0key0uqUkk6LJRT" />
          </NavLink>
          <Route exact path="/radio" component={NewHome} />
          <Route exact path="/radio/ed-sheeran" component={Performer} />
        </div>
      </Router>
    );
  }
}

export default App;
