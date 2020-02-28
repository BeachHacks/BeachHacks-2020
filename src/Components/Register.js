import React, { Component } from "react";

import { ReactTypeformEmbed } from 'react-typeform-embed';
export default class Register extends Component {
  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="typeform-popup">
        <ReactTypeformEmbed
          popup
          hideHeaders
          hideFooters
          url="https://beachhacks2020.typeform.com/to/R2DHgk"
          ref={tf => { this.typeformEmbed = tf }}
          style={{ top: 100 }}
        />
        <div className="registration">{this.props.children}</div>
      </div>
    );
  }
}
