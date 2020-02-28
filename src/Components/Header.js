import React, { Component } from "react";
import Register from "./Register";
import BeachHacks from "../Images/beachhacks-nav.png";
import Info from "../Images/sub.png";
import Shark from "../Images/shark.png"

// import Cloud1 from "../Images/background-images/cloud1.png";
// import Cloud2 from "../Images/background-images/cloud2.png";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="header-container">
          <div className="header-shark">
            <img src={Shark} alt="Shark" className="shark-image"/>
          </div>
          <div className="header-info">
            <img
              src={BeachHacks}
              alt="BeachHacks April 25 - 26, 2020"
              className="beachhacks-image"
            />
            <img
              src={Info}
              alt="BeachHacks April 25 - 26, 2020"
              className="beachhacks-image"
            />
            <br/>
            <br/>
            
            <Register>
              {/* <a href="/live"> */}
                {/* <button className="apply-button">WE ARE LIVE</button> */}
                <button className="apply-button">Apply Now!</button>
              {/* </a> */}
            </Register>
            <br/>
          </div>


          {/* <div className="clouds">
            <img src={Cloud1} alt="Cloud1" className="cloud1" />
            <img src={Cloud2} alt="Cloud2" className="cloud2" />
      </div> */}
        </div>
        {/* <img src={logo} className="beachhacks-logo" alt="logo" />
        <p>April 20, 2019 - April 21, 2019</p>
        <p>California State University, Long Beach</p> */}
        {/* Apply button with surrounding a tag */}
        {/* <Register>
          <button className="apply-button">REGISTER</button>
        </Register>
        <button className="apply-button">DARK MODE</button>*/}
      </div>
    );
  }
}

export default Header;
