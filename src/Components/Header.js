import React, { Component } from "react";
import Modal, { closeStyle } from "simple-react-modal";

import Register from "./Register";
import BeachHacks from "../Images/beachhacks-nav.png";
import Cancelled from "../Images/cancelled.png"; // :(
import Info from "../Images/sub.png";
import Shark from "../Images/shark.png";

// import Cloud1 from "../Images/background-images/cloud1.png";
// import Cloud2 from "../Images/background-images/cloud2.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {show: true};
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <div id="m-container">
          <Modal
            className="modal" //this will completely overwrite the default css completely
            containerClassName="modal-container"
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close.bind(this)}
          >
            <div>
            <h1 className="info-header">Important Announcement</h1>
              <p>
                Sad news everyone, due to recent global events, CSULB cancelled
                all events before April 30th. Seeing that how BeachHacks was
                supposed to be hosted April 25-26th, this means that we can no
                longer host the event. We apologize to all the people who were
                looking forward to our event, but we understand the health risks
                involved and respect CSULB's decision. Thank you sincerely for
                trying to be a part of this year's BeachHacks; hope to see you
                next year!
              </p>
              <a onClick={this.close.bind(this)} className="close-btn">
                Close
              </a>
            </div>
          </Modal>
        </div>
        <div id="header">
          <div className="header-container">
            <div className="header-shark">
              <img src={Shark} alt="Shark" className="shark-image" />
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
              <img 
                src={Cancelled}
                alt="BeachHacks 2020 has been cancelled."
                className="cancelled beachhacks-image"
                onClick={this.show.bind(this)}
              />
              <br />
              <br />

              {/* <Register>
              <a href="/live">
                <button className="apply-button">WE ARE LIVE</button>
                <button className="apply-button">Apply Now!</button>
              </a>
            </Register> */}
              <br />
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
      </div>
    );
  }
}

export default Header;
