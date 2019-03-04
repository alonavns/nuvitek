import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import elementResizeEvent from 'element-resize-event'

import { ColorText } from 'components/_Common'
import { CloudService } from 'components/Cloud'
import sreviceAws from 'assets/images/services/aws-logo.png'

class CloudServices extends Component {
  state = {
    repeatWidth: 300,
    repeatCount: 5,
    services: [
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 10, top: 20}, radius: 94},
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 20, top: 150}, radius: 112, },
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 140, top: 50}, radius: 157, },
    ],
    diff: 0,
    moveLock: false,
  }
  componentDidMount() {
    var services = this.props.data;
    var repeatWidth = 0;
    for (var i = 0; i < services.length; i++) {
      if (repeatWidth < services[i].pos.left + services[i].radius + 30)
        repeatWidth = services[i].pos.left + services[i].radius + 30
    }
    this.setState({services, repeatWidth });
    var resizeElement = document.getElementById('services-container');
    var self = this;
    elementResizeEvent(resizeElement, function() {
      self.setState({repeatCount: Math.ceil(resizeElement.offsetWidth / self.state.repeatWidth)});
    });
    setInterval(function() {
      if (self.state.moveLock) return;
      var diff = self.state.diff;
      diff -= 1;
      if (diff < - self.state.repeatWidth)
        diff += self.state.repeatWidth;
      self.setState({ diff });
    }, 10);
  }
  handleOver = (e) => {
    this.setState({ moveLock: true });
  }
  handleOut = (e) => {
    this.setState({ moveLock: false });
  }
  render() {
    var containers = [];
    for (var i = 0; i < this.state.repeatCount + 1; i++) {
      for (var j = 0; j < this.state.services.length; j++) {
        var style = {
          left: this.state.repeatWidth * i + this.state.services[j].pos.left + this.state.diff,
          top: this.state.services[j].pos.top,
          width: this.state.services[j].radius,
          height: this.state.services[j].radius,
        };
        containers.push(<CloudService key={i * this.state.services.length + j} style={style} image={this.state.services[j].image} label={this.state.services[j].label} />);
      }
    }
    return (
      <div
        className={`CloudServices`}
        style={{ ...this.props.style }}
      >
        <div id="services-container" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
        {containers}
        </div>
      </div>
    )
  }
}

export default withRouter(CloudServices);
