import React, { Component } from 'react'

import { Button, Input } from 'components/_Common'
import back from 'assets/images/back_contact.svg'

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
        </div>
      </div>
    )
  }
}

export default Contact
