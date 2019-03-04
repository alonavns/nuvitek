import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import elementResizeEvent from 'element-resize-event'

import { ColorText } from 'components/_Common'
import icon from 'assets/images/home/about/cloud-icon.png'

class CloudContent extends Component {
  render() {
    return (
      <div
        className={`CloudContent`}
        style={{ ...this.props.style }}
      >
        <img src={icon} />
        <div className={'ContentTitle'}>{this.props.data.title}</div>
        <div className={'ContentDescription'}>{this.props.data.contents.map((text, index) => (<p key={index}>{text}</p>))}</div>
      </div>
    )
  }
}

export default withRouter(CloudContent);
