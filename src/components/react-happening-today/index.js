import React, {Component} from 'react';
import './index.css';

import MaterialIcon from 'react-google-material-icons';

import alcatraz from './alcatraz.jpg';
import vance from './vance.jpg';
import ed from './ed.jpg';

class HappeningToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
       onVance: true,
       onEd: true
    }
  }

  changeOnVance(){
    this.setState({onVance: !this.state.onVance, onEd: this.state.onEd})
  }

  changeOnEd(){
    this.setState({onEd: !this.state.onEd, onVance: this.state.onVance})
  }

  render() {
    let btn_class = this.state.onEd ? "block show" : "block";
    return (
      <div>


      <div className="wrapper">
        <h2 className="title">Happening today </h2>

        <div className="item">
          <div className="item-picture" onClick={this.changeOnVance.bind(this)}>
            <div className="play-hover">
              <MaterialIcon icon="play_arrow" size={30} style={{padding: 10}} className="playArrow"/>
            </div>

            <img src={vance} className="event-image" />
          </div>
          <div className="text">
            <div className="date"> Wed, June 6th &middot; 7:30 pm  </div>
            <div className="title"> Vance Joy </div>
            <div className="venue"> Greek Theatre Berkeley </div>
            <div className="city"> Berkeley, CA </div>
          </div>
        </div>

        <div className="item">
          <div className="item-picture">
            <img src={alcatraz} className="event-image" />
          </div>
          <div className="text">
            <div className="date"> Wed, June 6th &middot; 5:55 pm  </div>
            <div className="title"> Alcatraz Night Tour </div>
            <div className="venue"> Alcatraz Island </div>
            <div className="city"> San Francisco, CA </div>
          </div>
        </div>

        <div className="item right">
          <div className="item-picture" onClick={this.changeOnEd.bind(this)}>
            <div className="play-hover">
              <MaterialIcon icon="play_arrow" size={30} style={{padding: 10}} className="playArrow"/>
            </div>
              <img src={ed} className="event-image" />
          </div>
          <div className="text">
            <div className="date"> Wed, June 6th &middot; 8:00 pm  </div>
            <div className="title"> Ed Sheeran </div>
            <div className="venue"> August Hall </div>
            <div className="city"> San Francisco, CA </div>
          </div>
        </div>

      </div>

      {/* <div className="trigger"></div> */}
      <div className={btn_class}></div>

      </div>
    );
  }
}

export default HappeningToday;
