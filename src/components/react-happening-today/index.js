import React, {Component} from 'react';
import './index.css';

import MaterialIcon from 'react-google-material-icons';

class HappeningToday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <h2 className="title">Happening today </h2>

        <div className="item">
          <div className="item-picture">
            <div className="play">
              <MaterialIcon icon="play_arrow" size={30} style={{padding: 10}} className="playArrow"/>
            </div>
          </div>
          <div className="text">
            <div className="date"> Fri, April 13th  </div>
            <div className="title"> Alcatraz Night Tour </div>
            <div className="venue"> Alcatraz Island </div>
            <div className="city"> San Francisco, CA </div>
          </div>
        </div>

        <div className="item">
          <div className="item-picture">
            <div className="play">
              <MaterialIcon icon="play_arrow" size={30} style={{padding: 10}} className="playArrow"/>
            </div>
          </div>
          <div className="text">
            <div className="date"> Fri, April 13th  </div>
            <div className="title"> Alcatraz Night Tour </div>
            <div className="venue"> Alcatraz Island </div>
            <div className="city"> San Francisco, CA </div>
          </div>
        </div>

        <div className="item right">
          <div className="item-picture">
            <div className="play">
              <MaterialIcon icon="play_arrow" size={30} style={{padding: 10}} className="playArrow"/>
            </div>
          </div>
          <div className="text">
            <div className="date"> Fri, April 13th  </div>
            <div className="title"> Alcatraz Night Tour </div>
            <div className="venue"> Alcatraz Island </div>
            <div className="city"> San Francisco, CA </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HappeningToday;
