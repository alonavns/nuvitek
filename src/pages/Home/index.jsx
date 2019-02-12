import React, { Component } from 'react'

import { Button, Input } from 'components/_Common'
import cloud from 'assets/images/home_cloud.svg'
import arrow from 'assets/images/arrow_right.svg'
import image1 from 'assets/images/home/section1/image1.svg'
import image2 from 'assets/images/home/section1/image2.svg'
import image3 from 'assets/images/home/section1/image3.svg'
import clients from 'assets/images/home/section1/clients.svg'
import blog from 'assets/images/home/blog.png'
import blogUser from 'assets/images/home/blog_user.png'
import blog1 from 'assets/images/home/blog_example1.png'
import blog2 from 'assets/images/home/blog_example2.png'

class Home extends Component {
  state = {
    'shipping.email': ''
  }

  onStateUpdate(key) {
    return e => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    const shippingEmail = this.state['shipping.email'];

    return (
      <div className="HomeWrapper">
        <div className={`IntroWrapper`}>
          <img className='Cloud' src={cloud} />
          <div className='Ribbon'>
            Take Survey
          <img src={arrow} />
          </div>
          <div className='Intro'>
            <h1>We are passionate about solving technology problems</h1>
            <p>
              Simple, flexible, automated and secure - that's the Nuvitek way.
              What service are you looking for?
            </p>
            <Button label='Cloud Migrations' />
          </div>
        </div>
        <section className="Section1">
          <label>fast, flexible, agile</label>
          <h1>What we can do for you</h1>
          <p>Our services put technology to work for our customers so that they can devote all their energies to their core mission.</p>
          <div className="ThingsCanDo">
            <div className="Cloud">
              <div className="ImageWrapper">
                <img src={image1} />
              </div>
              <h1>Cloud</h1>
              <p>Has an postea euripidis, dicunt copiosae sapientem eum at. Duis soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne, nec timeam democritum eu. </p>
              <ul>
                <li>Advisory & Migration</li>
                <li>Managed Service</li>
                <li>Continuity Operations</li>
              </ul>
              <a>Learn More</a>
            </div>
            <div className="Automation">
              <div className="ImageWrapper">
                <img src={image2} />
              </div>
              <h1>Automation</h1>
              <p>Has an postea euripidis, dicunt copiosae sapientem eum at. Duis soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne, nec timeam democritum eu. </p>
              <ul>
                <li>Infrastructure & Environment</li>
                <li>Automation & Orchestration </li>
                <li>Code Management & Integration</li>
              </ul>
              <a>Learn More</a>
            </div>
            <div className="Security">
              <div className="ImageWrapper">
                <img src={image3} />
              </div>
              <h1>Security</h1>
              <p>Has an postea euripidis, dicunt copiosae sapientem eum at. Duis soleat ne vim, laoreet indoctum quo ut. Mucius nusquam pri ne, nec timeam democritum eu. </p>
              <ul>
                <li>FedRamp</li>
                <li>ATO Application Migration</li>
                <li style={{ opacity: 0 }}>&nbsp;</li>
              </ul>
              <a>Learn More</a>
            </div>
          </div>
          <div className="Buttons">
            <Button label='CONTACT US NOW' />
            <Button label='VIEW JOB AOFFERS' green />
          </div>
        </section>
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
              className={`Input ${shippingEmail.length > 0 ? 'Valid' : ''}`}
              placeholder="Enter your email or mobile number"
              onChange={this.onStateUpdate('shipping.email')}
              value={shippingEmail}
            />
          </div>
          <div className="Info">
            <div className="Info1">
              +100 M<br /><span>Conversations Enabled</span>
            </div>
            <div className="Info2">
              99.99%<br /><span>Satisfied Customers</span>
            </div>
            <div className="Info1">
              24/7<br /><span>Support</span>
            </div>
            <div className="Info1">
              +20 years<br /><span>Unrivalled Services</span>
            </div>
          </div>
        </div>
        <section className="Blog">
          <label>Our recent artciles</label>
          <h1>Read Our Blog</h1>
          <p>Eam cibo tincidunt consectetuer no, an tacimates repudiandae eum, cum paulo saperet an. </p>
          <div className="Blogs">
            <div className="Main">
              <div className="Back">
                <img src={blog} />
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
                        <i className="fa fa-calendar" />
                        2 days ago
                    </div>
                      <div className="Comments">
                        <i className="fa fa-comment" />
                        3 comments
                    </div>
                    </div>
                  </div>
                </div>
                <div className="Divider" />
                <h1>How To Protect Your Computer Wery Useful Tips</h1>
              </div>
              <Like />
            </div>
            <div className="Examples">
              <div className="Example">
                <div className="Image"><img src={blog1} /></div>
                <div className="Title">Make Myspace Your Best Designed Space</div>
                <Like />
              </div>
              <div className="Example">
                <div className="Image"><img src={blog2} /></div>
                <div className="Title">How To Meet That Special Someone</div>
                <Like liked />
              </div>
            </div>
          </div>
          <div className="Buttons">
            <Button label='Contact Us' />
            <Button label='See All Blog' green />
          </div>
        </section>
        <div className="Clients">
          <img src={clients} />
        </div>
      </div>
    )
  }
}

class Like extends Component {
  render() {
    return (
      <div className={`LikeWrapper ${this.props.liked ? 'Liked' : ''}`}>
        <i className={`fa fa-heart${this.props.liked ? '' : '-o'}`} />
      </div>
    )
  }
}

export default Home
