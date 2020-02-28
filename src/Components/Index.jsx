import React, { Component } from "react";
// import Anime from 'react-anime';
export default class Info extends Component {
  render() {
    return (
      <div id="info">
        <div id="info-wrapper">
          {/* <Anime opacity={[0,1]} translateY={'1em'} delay={(e,i) => i * 3000} autoplay={true}> */}
          <h1 className="info-header">What is BeachHacks?</h1>
          <p className="info-container">
            BeachHacks is the fifth collegiate hackathon hosted by California
            State University, Long Beach! During our 24 hour event, student
            developers and designers will gather on campus to build and program
            ideas into reality. Whether you join a team or go solo, join us at
            BeachHacks and show us what makes you unique. It doesn't matter if
            you're aiming to be the next Tony Stark or you're just looking to
            learn some code, BeachHacks has something for you!
          </p>
          {/* <h2 className="info-subheader">BeachHacks 2019's Stats</h2>
          <div id="info-accomplishments">
              <h3 className="accomplishment">400+ Participants</h3>
              <h3 className="accomplishment">Over 60 Finished Projects</h3>
              <h3 className="accomplishment">$16,000 in Prizes</h3>
          </div> */}
          {/* </Anime> */}
        </div>
      </div>
    );
  }
}
