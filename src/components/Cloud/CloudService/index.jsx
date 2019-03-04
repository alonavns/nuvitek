import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import elementResizeEvent from 'element-resize-event'

import { ColorText } from 'components/_Common'
import sreviceAws from 'assets/images/services/aws-logo.png'

class CloudService extends Component {
  render() {
    return (
      <div
        className={`CloudService`}
        style={{ ...this.props.style }}
      >
        <img src={this.props.image} />
        <div className={'service-label'}>{this.props.label}</div>
      </div>
    )
  }
}

export default withRouter(CloudService);
