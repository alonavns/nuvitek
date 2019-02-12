import React, { Component } from 'react'

import { Button, Input } from 'components/_Common'
import back from 'assets/images/back_round.svg'

class About extends Component {
  render() {
    return (
      <div className="AboutWrapper">
        <img src={back} />
      </div>
    )
  }
}

export default About
