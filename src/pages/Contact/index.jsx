import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, Input, OurTeam } from 'components/_Common'

class Contact extends Component {
  render() {
    return (
      <div className="ContactWrapper">
        <div className="Head">
          {/* <img src={back} /> */}
          <Container className="Heading">
            <label>get in touch</label>
            <h1>Contact Us</h1>
            <p>Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</p>
            <Row className="Contacts">
              <Col lg={{size: 12, offset: 0}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={{size: 10, offset: 1}}>
                <Row>
                  <Col lg={4} md={12} className="contactus-header-item">
                    <div><i className="fa fa-map-marker" /></div>
                    <div>Nuvitek LLC 13800 Coppermine<br /> Rd. Herndon VA 20171</div>
                  </Col>
                  <Col lg={4} md={12} className="contactus-header-item">
                    <div><i className="fa fa-phone" /></div>
                    <div>612-888-6884</div>
                  </Col>
                  <Col lg={4} md={12} className="contactus-header-item">
                    <div><i className="fa fa-envelope" /></div>
                    <div>getintouch@nuvitek.com</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ContactForm">
          <Container className="Form">
            <Row className="InputGroup">
              <Col lg={6}>
              <Input required placeholder='Your First Name' white label="First Name:" />
              </Col>
              <Col lg={6}>
              <Input required placeholder='Your Last Name' white label="Last Name:" />
              </Col>
            </Row>
            <Row className="InputGroup">
              <Col lg={6}>
              <Input required placeholder='Type Email' white label="Email Address:" />
              </Col>
              <Col lg={6}>
              <Input placeholder='0000 000 000 000' white label="Phone Number:" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
              <Input textarea placeholder='Your Message' white label="Message Text" />
              </Col>
            </Row>
            <Row className="FormFooter">
              <Col lg={8}>
                <p>I agree to accept Danal Terms and Conditions for this service.</p>
                <label>
                  <input type="checkbox" />
                  ACCEPT TERMS &amp; CONDITIONS
                </label>
              </Col>
              <Col lg={4}>
                <div className="g-recaptcha" data-sitekey="6Le9j1cUAAAAAIohkeM5WjH4SwEhjs5csrHxI8sq"></div>
              </Col>
            </Row>
            <Row className="Buttons">
              <Col lg={12}>
              <Button label='Submit Now' />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="OurTeam">
          <h1>Our Team</h1>
          <OurTeam />
        </div>
      </div>
    )
  }
}

export default Contact
