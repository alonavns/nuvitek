import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from "react-router-dom";

import { Button, ColorText, Input, OurTeam } from 'components/_Common'
import { CloudServices } from 'components/Cloud'
import { ClientBlock } from 'components/About'
// import back from 'assets/images/back_round.svg'
import sreviceAws from 'assets/images/services/aws-logo.png'

class About extends Component {
  handleClickButton = (link) => {
    this.props.history.push(link);
  }
  render() {
    const partners = [
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 10, top: 20}, radius: 94},
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 20, top: 150}, radius: 112, },
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 140, top: 50}, radius: 157, },
    ];
    const customers = [
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 10, top: 20}, radius: 94},
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 20, top: 150}, radius: 112, },
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 140, top: 50}, radius: 157, },
    ];
    return (
      <div className="AboutWrapper">
        <div className="PageHeader">
          <div className="PageName"><ColorText label={'ABOUT US & OUR VALUES'} /></div>
          <div className="PageTitle">About Nuvitek</div>
          <div className="PageDescription">Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</div>
          <div className="PageMore"><i className="fa fa-arrow-down"></i></div>
        </div>
        <div className="BelieveContainer">
          <Container>
            <Row>
              <Col lg={12} md={12}>
                <h1>We Believe</h1>
                <p>With the right team and the right technology, IT organizations can solve complex problems and make your business leaner, faster and more flexible. We believe in getting things done effectively and efficiently with simple, innovative solutions. Our team of engineers is constantly researching and implementing new solutions to help our clients overcome their business and technology challenges. We believe in providing added value for our customers by being part of your team, helping you excel, deliver and achieve your goals. Nuvitek believes in going above-and-beyond and delivering results — outstanding results.</p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12}>
                <h1>Continuous Improvement</h1>
                <p>At Nuvitek, we are always learning and adapting. We embrace innovating with new technologies and challenging conventional wisdom, be it via cloud computing, DevOps or software-defined networking. Nuvitek goes beyond the hype to implement solutions that take advantage of cutting edge technologies and help customers move quickly to where they need to be: The emerging technology model, the one-step-ahead model.</p>
              </Col>
              <Col lg={6} md={12}>
                <h1>Our Experience</h1>
                <p>Our team of engineers has more than 20 years of experience delivering successful IT projects to Federal Government and commercial clients. With our strong pool of talented, expert staff, Nuvitek has a sterling track record of providing innovative and reliable IT solutions to both government and commercial clients.</p>
              </Col>
            </Row>
          </Container>
          <Button label="Contact Us Now" green onClick={e => { this.handleClickButton('/contact-us') }}></Button>
        </div>
        <div className="OurPartners">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <h1>Our Partners</h1>
                <ColorText label="PROFESSIONAL SERVICES PARTNERS" green />
              </Col>
              <Col lg={6} md={12}>
                <span className="selector actived">ALL</span>
                <span className="selector">GOVERNMENT</span>
                <span className="selector">COMMERCIAL</span>
              </Col>
            </Row>
          </Container>
          <CloudServices data={partners} />
        </div>
        <div className="OurCoreValues">
          <Container>
            <Row>
              <Col xl={6} lg={12}>
                <h1>Our Core Values</h1>
                <p>Deleniti reprimique vim et. Aliquip apeirian forensibus ut vel, sea id meis clita docendi. Ut vix illud ornatus vulputate, usu labitur percipit et. Vis natum fierent ne, no ius scribentur deterruisset consectetuer, mei ne nostrud vivendo abhorreant.</p>
                <p>Erant utamur periculis in vis, detracto euripidis ei vel. Est mutat affert at, vocent nusquam pertinax vel an.</p>
                <Button label="See Our Clients"></Button>
              </Col>
              <Col xl={6} lg={12}>
                <Row>
                  <Col lg={6} md={12} className="margin-top-50">
                    <ClientBlock title="Liber scripta conclusionemque" description="Deleniti reprimique vim et. Aliquip apeirian forensibus ut vel, sea id meis clita docendi. Ut vix illud ornatus vulputate, usu labitur." icon="user" />
                    <ClientBlock title="Liber scripta conclusionemque" description="Deleniti reprimique vim et. Aliquip apeirian forensibus ut vel, sea id meis clita docendi. Ut vix illud ornatus vulputate, usu labitur." icon="best" />
                  </Col>
                  <Col lg={6} md={12}>
                    <ClientBlock title="Liber scripta conclusionemque" description="Deleniti reprimique vim et. Aliquip apeirian forensibus ut vel, sea id meis clita docendi. Ut vix illud ornatus vulputate, usu labitur." icon="pair" />
                    <ClientBlock title="Liber scripta conclusionemque" description="Deleniti reprimique vim et. Aliquip apeirian forensibus ut vel, sea id meis clita docendi. Ut vix illud ornatus vulputate, usu labitur." icon="measure" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="OurTeam">
          <h1>Our Team</h1>
          <OurTeam database={this.props.database} />
        </div>
        <div className="OurCustomers">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <h1>Our Customers</h1>
              </Col>
              <Col lg={6} md={12}>
                <span className="selector actived">ALL</span>
                <span className="selector">FEDERAL</span>
                <span className="selector">COMMERCIAL</span>
              </Col>
            </Row>
          </Container>
          <CloudServices data={customers} />
        </div>
      </div>
    )
  }
}

export default withRouter(About)
