import React, { Component } from "react";
import Home from "../Images/home.svg";
import Facebook from "../Images/facebooklogo.svg";
import Instagram from "../Images/instagramlogo.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <h2 className="socialmedia">
          <a href="http://csulb.acm.org/" target="_blank">
            <img className="logo" src={Home} alt="CSULB ACM Home" />
          </a>
          <a href="https://www.facebook.com/BeachHacks/" target="_blank">
            <img className="logo" src={Facebook} alt="BeachHacks Facebook" />
          </a>
          <a href="https://instagram.com/beachhackscsulb/" target="_blank">
            <img className="logo" src={Instagram} alt="BeachHacks Instagram" />
          </a>
        </h2>
        <h3 className="footer-text">
          Made with{" "}
          <span role="img" alt="love">
            💖
          </span>{" "}
          by the BeachHacks Committee
        </h3>
      </div>
    );
  }
}
