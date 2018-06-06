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
          <div className="right">
            <MaterialIcon icon="search" size={26}/>
          </div>
        </div>
        <div className="signin">Sign in</div>
      </div>
      <div className="categories">
        <div className="categoryTab">Find events by category <MaterialIcon icon="expand_more" size={20} className="expand"/> </div>
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
