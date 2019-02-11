import React, { Component } from 'react'

import cloud from 'assets/images/home_cloud.svg';

class Home extends Component {
  render() {
    return (
      <div className={`HomeWrapper`}>
        <img className='Cloud' src={cloud} />
      </div>
    )
  }
}

export default Home
