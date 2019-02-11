import React, { Component } from 'react'

import { Button, Input } from 'components/_Common'
import cloud from 'assets/images/home_cloud.svg'
import arrow from 'assets/images/arrow_right.svg'

class Home extends Component {
  render() {
    return (
      <div className={`HomeWrapper`}>
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
    )
  }
}

export default Home
