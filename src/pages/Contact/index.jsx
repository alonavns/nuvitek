import React, { Component } from 'react'

import { Button, Input } from 'components/_Common'
import back from 'assets/images/back_contact.svg'
import waves from 'assets/images/waves.svg'

class Contact extends Component {
  render() {
    return (
      <div className="ContactWrapper">
        <div className="Head">
          <img src={back} />
          <div className="Heading">
            <label>get in touch</label>
            <h1>Contact Us</h1>
            <p>Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</p>
            <div className="Contacts">
              <div>
                <div><i className="fa fa-map-marker" /></div>
                <div>Nuvitek LLC 13800 Coppermine<br /> Rd. Herndon VA 20171</div>
              </div>
              <div>
                <div><i className="fa fa-phone" /></div>
                <div>612-888-6884</div>
              </div>
              <div>
                <div><i className="fa fa-envelope" /></div>
                <div>getintouch@nuvitek.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ContactForm">
          <img src={waves} />
          <div className="Form">
            <div className="InputGroup">
              <Input required placeholder='Your First Name' white label="First Name:" />
              <Input required placeholder='Your Last Name' white label="Last Name:" />
            </div>
            <div className="InputGroup">
              <Input required placeholder='Type Email' white label="Email Address:" />
              <Input placeholder='0000 000 000 000' white label="Phone Number:" />
            </div>
            <Input textarea placeholder='Your Message' white label="Message Text" />
            <div className="FormFooter">
              <p>I agree to accept Danal Terms and Conditions for this service.</p>
            </div>
          </div>
          <div className="Buttons">
            <Button label='Submit Now' />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
