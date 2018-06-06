import React from 'react';
import picture from './performer-vance.png';

const Performer = () => {
  return (
    <img src={picture} style={{width: "100%", position: "absolute", top: 0, "z-index": 1}} />
  )
}

export default Performer;
