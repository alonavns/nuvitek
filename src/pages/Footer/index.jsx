import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Button, Input } from "components/_Common";
import logo from "assets/images/logo_name_black.svg";
import mapIcon from "assets/images/map_icon.svg";

const LINKS = [
  {
    label: "Quick links",
    links: [
      { label: "Work With Us" },
      { label: "Our Experience" },
      { label: "Contract Vehicles" },
      { label: "Partnerships" },
      { label: "Customers" }
    ]
  },
  {
    label: "Our Services",
    links: [
      { label: "Our Services" },
      { label: "Cloud" },
      { label: "Automation" },
      { label: "Transformation" }
    ]
  },
  {
    label: "Job offers",
    links: [
      { label: "Cloud Solutions Architect" },
      { label: "Virtualization Engineer" },
      { label: "Network Engineer" },
      { label: "Altiris Engineer" },
      { label: "Help Desk Engineer" }
    ]
  }
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="FooterWrapper white">
        <div
          className="Before"
          style={{
            borderLeftWidth:
              Math.min(window.outerWidth, window.innerWidth, 1920) -
              (window.navigator.userAgent.includes("Android") ||
              window.navigator.userAgent.includes("iPhone") ||
              window.outerWidth > 1920
                ? 0
                : 4)
          }}
        />
        <div className="ContactForm">
          <div className="Form">
            <div className="Description">
              <h1>Ready to get started?</h1>
              <p>
                Feel free to contact us for any inquiries, if you have any
                questions about our services, or just say hello.
              </p>
            </div>
            <div className="ContactInfo">
              <Input required placeholder="Your Name" />
              <Input required placeholder="Email Address" />
              <Input placeholder="Phone Number" />
            </div>
            <div className="ContactMessage">
              <Input textarea required placeholder="Your Message" />
              <Button label="Send Now" />
            </div>
          </div>
        </div>
        <div className="Links">
          <div className="Info">
            <NavLink className="Logo" to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <div className="Phone">
              <i className="fa fa-phone" />
              612-888-6884
            </div>
            <div className="Email">
              <i className="fa fa-envelope" />
              getintouch@nuvitek.com
            </div>
            <div className="Map">
              <i className="fa fa-map-marker" />
              <div className="MapInput">
                View Map
                <img src={mapIcon} />
              </div>
            </div>
          </div>
          {LINKS.map((col, index) => (
            <div className={`LinksCol Col-${index + 1}`} key={index}>
              <div className="Title">{col.label}</div>
              <ul>
                {col.links.map((link, cIndex) => (
                  <li key={cIndex}>
                    <NavLink to={"/"} activeClassName="Active">
                      {index === 0 ? <i className="fa fa-angle-right" /> : null}
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="CopyRight">
          <div>© 2014-2018 Nuvitek. All rights reserved.</div>
          <div>Privacy & Terms</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
