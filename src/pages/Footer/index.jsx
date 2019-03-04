import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'

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
      <div className="FooterWrapper">
        <Container className="ContactForm">
          <Row>
            <Col xl={{size:12, offset:0}} lg={{size: 6, offset: 3}} md={{size: 8, offset: 2}} sm={{size: 12, offset: 0}}>
              <div className="Form">
                <Row>
                  <Col xl={4} lg={12} md={12} sm={12} className="Description">
                    <h1>Ready to get started?</h1>
                    <p>
                      Feel free to contact us for any inquiries, if you have any
                      questions about our services, or just say hello.
                    </p>
                  </Col>
                  <Col xl={3} lg={12} md={12} sm={12} className="ContactInfo">
                    <Input required placeholder="Your Name" />
                    <Input required placeholder="Email Address" />
                    <Input placeholder="Phone Number" />
                  </Col>
                  <Col xl={5} lg={12} md={12} sm={12} className="ContactMessage">
                    <Input textarea required placeholder="Your Message" />
                    <Button label="Send Now" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="Links">
          <Row>
          <Col lg={{size:3, offset:0}} md={{size: 4, offset: 4}} sm={{size: 6, offset: 3}} xs={{size: 8, offset: 2}} className="Info">
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
          </Col>
          <Col lg={{size:9, offset:0}} md={{size:12, offset: 0}} sm={{size: 6, offset: 3}} xs={{size: 8, offset: 2}}>
            <Row>
              {LINKS.map((col, index) => (
                <Col lg={4} md={4} className={`LinksCol`} key={index}>
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
                </Col>
              ))}
            </Row>
          </Col>
          </Row>
        </Container>
        <Container className="CopyRight">
          <Row>
          <Col sm={8} xs={12}>© 2014-2018 Nuvitek. All rights reserved.</Col>
          <Col sm={4} xs={12}>Privacy & Terms</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Footer);
