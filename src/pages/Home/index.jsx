import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from "react-router-dom";

import { Button, Input, ColorText } from "components/_Common";
import { Testimoials } from "components/Home";
import arrow from "assets/images/arrow_right.svg";
import image1 from "assets/images/home/section1/image1.svg";
import image2 from "assets/images/home/section1/image2.svg";
import image3 from "assets/images/home/section1/image3.svg";
import clients from "assets/images/home/section1/clients.svg";
import blog from "assets/images/home/blog.png";
import blogUser from "assets/images/home/blog_user.png";
import icon1 from "assets/images/home/about/icon1.svg";
import icon2 from "assets/images/home/about/icon2.svg";
import heroCloud from "assets/images/home/hero-cloud.png";
import jobsImg from "assets/images/home/jobs-image.png";

class Home extends Component {
  state = {
    "shipping.email": ""
  };

  onStateUpdate(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
  handleClickButton = (link) => {
    this.props.history.push(link);
  }

  render() {
    const shippingEmail = this.state["shipping.email"];

    return (
      <div className="HomeWrapper">
        <div className={`IntroWrapper`}>
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="Ribbon">
                  Take Survey <i className="fa fa-arrow-right"></i>
                  {/* <img src={arrow} /> */}
                </div>
                <div className="Intro">
                  <h1>We are passionate about solving technology problems</h1>
                  <p>
                    Simple, flexible, automated and secure - that's the Nuvitek way.
                    What service are you looking for?
                  </p>
                  <Button label="Cloud Migrations" onClick={e => { this.handleClickButton('/cloud') }} />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <img src={heroCloud} />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="Section1">
          <Row>
            <Col lg={12}>
              <ColorText label="FAST, FLEXIBLE, AGILE" green />
              <h1>What we can do for you</h1>
              <p>Our services put technology to work for our customers so that they can devote all their energies to their core mission.</p>
            </Col>
          </Row>
          <Row className="ThingsCanDo">
            <Col lg={4} md={12}>
              <div className="Cloud">
                <div className="ImageWrapper">
                  <img src={image1} />
                </div>
                <h1>Cloud</h1>
                <p>
                  Has an postea euripidis, dicunt copiosae sapientem eum at. Duis
                  soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne,
                  nec timeam democritum eu.{" "}
                </p>
                <ul>
                  <li>Advisory & Migration</li>
                  <li>Managed Service</li>
                  <li>Continuity Operations</li>
                </ul>
                <a>Learn More</a>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="Automation">
                <div className="ImageWrapper">
                  <img src={image2} />
                </div>
                <h1>Automation</h1>
                <p>
                  Has an postea euripidis, dicunt copiosae sapientem eum at. Duis
                  soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne,
                  nec timeam democritum eu.{" "}
                </p>
                <ul>
                  <li>Infrastructure & Environment</li>
                  <li>Automation & Orchestration </li>
                  <li>Code Management & Integration</li>
                </ul>
                <a>Learn More</a>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="Security">
                <div className="ImageWrapper">
                  <img src={image3} />
                </div>
                <h1>Security</h1>
                <p>
                  Has an postea euripidis, dicunt copiosae sapientem eum at. Duis
                  soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne,
                  nec timeam democritum eu.{" "}
                </p>
                <ul>
                  <li>FedRamp</li>
                  <li>ATO Application Migration</li>
                  <li style={{ opacity: 0 }}>&nbsp;</li>
                </ul>
                <a>Learn More</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="Buttons">
              <Button label="CONTACT US NOW" onClick={e => { this.handleClickButton('/contact-us') }} />
              <Button label="VIEW JOB OFFERS" green onClick={e => { this.handleClickButton('/stories') }} />
            </Col>
          </Row>
        </Container>
        <div className="Clients">
          <img src={clients} />
        </div>
        <div className="EmailForm">
          <label>AWESOME SUBTITLE</label>
          <h1>We would love to hear from you</h1>
          <p>We are all excited to work with you and see your growing</p>
          <div className="SliddingForm">
            <div className="Button">Go</div>
            <input
              className={`Input ${shippingEmail.length > 0 ? "Valid" : ""}`}
              placeholder="Enter your email or mobile number"
              onChange={this.onStateUpdate("shipping.email")}
              value={shippingEmail}
            />
          </div>
          <Container>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="Info">
                  +100 M<br />
                  <span>Conversations Enabled</span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="Info">
                  99.99%
                  <br />
                  <span>Satisfied Customers</span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="Info">
                  24/7
                  <br />
                  <span>Support</span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="Info">
                  +20 years
                  <br />
                  <span>Unrivalled Services</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Blog">
          <Container>
            <Row>
              <Col lg={12}>
                <label>Our recent artciles</label>
                <h1>Read Our Blog</h1>
                <p>
                  Eam cibo tincidunt consectetuer no, an tacimates repudiandae eum,
                  cum paulo saperet an.{" "}
                </p>
              </Col>
            </Row>
            <Row className="Blogs">
              <Col lg={8} md={12} className="Main">
                <div className="Back">
                </div>
                <div className="Info">
                  <div className="UserInfo">
                    <div>
                      <img src={blogUser} />
                    </div>
                    <div className="User">
                      <div className="Name">Romain Briaux</div>
                      <div className="Extra">
                        <div className="Posted">
                          <i className="fa fa-calendar" />2 days ago
                        </div>
                        <div className="Comments">
                          <i className="fa fa-comment" />3 comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Divider" />
                  <h1>How To Protect Your Computer Wery Useful Tips</h1>
                </div>
                <Like />
              </Col>
              <Col lg={4} md={12} className="Examples">
                <Row>
                  <Col lg={12} md={6} sm={12} className="Example">
                    <div className="Image">
                    </div>
                    <div className="Title">
                      Make Myspace Your Best Designed Space
                    </div>
                    <Like />
                  </Col>
                  <Col lg={12} md={6} sm={12} className="Example">
                    <div className="Image">
                    </div>
                    <div className="Title">How To Meet That Special Someone</div>
                    <Like liked />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="Buttons">
                  <Button label="Contact Us" onClick={e => { this.handleClickButton('/contact-us') }} />
                  <Button label="See All Blog" green onClick={e => { this.handleClickButton('/blog') }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="TestimoialSection">
          <Container>
            <Row>
              <Col xl={3} lg={4} md={12}>
                <ColorText green label="TESTIMOIALS" />
                <h2>
                  What say our clients
                </h2>
                <p>
                  Eu quo nemore prompta elaboraret. Vix inani doming definitiones ei, ne fuisset ullamcorper vel. Diam debitis ne vis, quot fabulas per te.
                </p>
                <Button label="SEE OUR CLIENTS" onClick={e => { this.handleClickButton('/about-us') }} />
              </Col>
              <Col xl={9} lg={8} md={12}>
                <Testimoials />
                <Button label="SEE OUR CLIENTS" onClick={e => { this.handleClickButton('/about-us') }} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Opportunities">
          <Container>
            <Row>
              <Col lg={6} md={12}>
               <img src={jobsImg} />
              </Col>
              <Col lg={6} md={12}>
                <ColorText green label="JOB OPPORTUNITIES" />
                <h2>Work with us</h2>
                <p>We don't just align our business to meet customer needs, at Nuvitek, we align our company to meet the needs of our employees.</p>
                <img src={jobsImg} />
                <Button label="SEE ALL OFFERS" onClick={e => { this.handleClickButton('/about-us') }} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="About">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <img src={icon1} />
                <h2>Our Experience</h2>
                <p>
                  Our team of engineers has more than 20 years of experience
                  delivering successful IT projects to Federal Government and
                  commercial clients. With our strong pool of talented, expert
                  staff, Nuvitek has a sterling track record of providing innovative
                  and reliable IT solutions to both government and commercial
                  clients.
                </p>
                <a>LEARN MORE ABOUT US</a>
              </Col>
              <Col lg={6} md={12}>
                <img src={icon2} />
                <h2>Equal Employment Opportunity</h2>
                <p>
                  Nuvitek LLC. is an Equal Employment Opportunity employer. Nuvitek
                  is committed to providing equal opportunity to all applicants and
                  employees regardless of race, color, creed, religion, national
                  origin, sexual orientation, age, gender, disability, medical
                  condition.
                </p>
                <a>MORE ABOUT JOB OPPORTUNITIES</a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Clients">
          <img src={clients} />
        </div>
      </div>
    );
  }
}

class Like extends Component {
  state = {
    liked: false,
  }
  componentDidMount() {
    this.setState({liked: !!this.props.liked});
  }
  handleClick = (e) => {
    this.setState({liked: !this.state.liked});
  }
  render() {
    return (
      <div className={`LikeWrapper ${this.state.liked ? "Liked" : ""}`} onClick={this.handleClick}>
        <i className={`fa fa-heart${this.state.liked ? "" : "-o"}`} />
      </div>
    );
  }
}

export default withRouter(Home);
