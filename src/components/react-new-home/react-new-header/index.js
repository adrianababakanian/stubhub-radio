import React, {Componemt} from 'react';
import './index.css';
import logo from './logo.png';
import MaterialIcon from 'react-google-material-icons';

const NewHeader = () => {
  return (
    <div className="headerWrapper">
      <div className="upper">
        <div className="logo"><img src={logo} className="logoPng" /></div>
        <div className="searchBar">
          Search for an event...
          | <MaterialIcon icon="search" size={28}/> 
        </div>
        <div className="lower"></div>
        <div className="floaters"></div>
      </div>
      <div className="categories">
        <div className="categoryTab">Find events by category</div>
        <div className="categoryTab" style={{color: "#d4d8dc", "font-family": "Helvetica Neue", "font-weight": 400, "font-size": "20px"}}> | </div>
        <div className="categoryTab">What&apos;s new</div>
        <div className="categoryTab">Popular</div>
        <div className="categoryTab">Sports</div>
        <div className="categoryTab">Concerts</div>
        <div className="categoryTab">Theater & Comedy</div>
      </div>
    </div>
  );
};

export default NewHeader;
