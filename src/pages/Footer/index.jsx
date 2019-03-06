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
      { label: "Work With Us", href: '/work-with-us' },
      { label: "Our Experience", href: '/our-experience' },
      { label: "Contract Vehicles", href: '/contract-vehicles' },
      { label: "Partnerships", href: '/partnerships' },
      { label: "Customers", href: '/customers' }
    ]
  },
  {
    label: "Our Services",
    links: [
      { label: "Our Services", href: '/our-services' },
      { label: "Cloud", href: '/cloud' },
      { label: "Automation", href: '/automation' },
      { label: "Transformation", href: '/transformation' }
    ]
  },
  {
    label: "Job offers",
    links: [
      { label: "Cloud Solutions Architect", href: '/cloud-solutions-architect' },
      { label: "Virtualization Engineer", href: '/virtualization-engineer' },
      { label: "Network Engineer", href: '/network-engineer' },
      { label: "Altiris Engineer", href: '/altiris-engineer' },
      { label: "Help Desk Engineer", href: '/help-desk-engineer' }
    ]
  }
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      form: {
        name: '',
        address: '',
        phone: '',
        message: '',
      },
      status: {
        name: true,
        address: true,
      },
      sentStatus: false,
    };
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
  checkStatus = (e) => {
    var form = this.state.form;
    var status = this.state.status;
    if (form.name.trim() == '') {
      status.name = false;
    } else {
      status.name = true;
    }
    if (form.address.trim() == '') {
      status.address = false;
    } else {
      status.address = true;
    }
    this.setState({status});
    return status.name && status.address;
  }
  handleChangeName = (e) => {
    var form = this.state.form;
    form.name = e.target.value;
    this.setState({form});
    this.checkStatus();
  }
  handleChangeAddress = (e) => {
    var form = this.state.form;
    form.address = e.target.value;
    this.setState({form});
    this.checkStatus();
  }
  handleChangePhone = (e) => {
    var form = this.state.form;
    form.phone = e.target.value;
    this.setState({form});
  }
  handleChangeMessage = (e) => {
    var form = this.state.form;
    form.message = e.target.value;
    this.setState({form});
  }
  handleSendNow = (e) => {
    var valid = this.checkStatus();
    if (valid) {
      this.setState({sentStatus: true});
      var self = this;
      setTimeout(function() {
        var form = self.state.form;
        form.name = '';
        form.address = '';
        form.phone = '';
        form.message = '';
        self.setState({sentStatus: false});
        self.setState({form});
      }, 3000);
    }
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
                    <Input required placeholder="Your Name" style={{backgroundColor: this.state.status.name ? '#5ACED3' : '#ffaaaa'}} onChange={this.handleChangeName} value={this.state.form.name} />
                    <Input required placeholder="Email Address" style={{backgroundColor: this.state.status.address ? '#5ACED3' : '#ffaaaa'}} onChange={this.handleChangeAddress} value={this.state.form.address} />
                    <Input placeholder="Phone Number" onChange={this.handleChangePhone} value={this.state.form.phone} />
                  </Col>
                  <Col xl={5} lg={12} md={12} sm={12} className="ContactMessage">
                    <Input textarea required placeholder="Your Message" onChange={this.handleChangeMessage} value={this.state.form.message} />
                    <Button label={this.state.sentStatus ? 'Sent' : 'Send Now'} onClick={this.handleSendNow} />
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
              <a href="tel:+16128886884">
              <i className="fa fa-phone" />
              612-888-6884
              </a>
            </div>
            <div className="Email">
              <a href="mailto:getintouch@nuvitek.com">
              <i className="fa fa-envelope" />
              getintouch@nuvitek.com
              </a>
            </div>
            <div className="Map">
              <i className="fa fa-map-marker" />
              <div className="MapInput">
                <NavLink to="/map">
                View Map
                <img src={mapIcon} />
                </NavLink>
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
                        <NavLink to={link.href} activeClassName="Active">
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
          <Col sm={8} xs={12}>© 2014-2019 Nuvitek. All rights reserved.</Col>
          <Col sm={4} xs={12}><NavLink to="/privacy">Privacy & Terms</NavLink></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Footer);
