import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Register from "./Register";
import Walter from "./Walter";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="item-logo">
                <Walter />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className="item" eventKey={0}>
                <AnchorLink offset="125" href="#info">
                  <p>ABOUT</p>
                </AnchorLink>
              </NavItem>
              <NavItem className="item" eventKey={1}>
                <AnchorLink offset="180" href="#faq">
                  <p>FAQ</p>
                </AnchorLink>
              </NavItem>
              <NavItem className="item" eventKey={2}>
                <AnchorLink offset="85" href="#sponsors">
                  <p>SPONSORS</p>
                </AnchorLink>
              </NavItem>
              {/* <NavItem
                className="item-live"
                eventKey={3}
                href="/live"
              >
                LIVE
              </NavItem> */}

              <a
                id="mlh-trust-badge"
                href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
                  alt="Major League Hacking 2020 Hackathon Season"
                />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
