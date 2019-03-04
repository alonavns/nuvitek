import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class CareerItem extends Component {
  state = {
    actived: false,
  }
  handleOpen = (e) => {
    this.setState({ actived: !this.state.actived })
  }
  render() {
    return (
      <div
        className={`CareerItem`}
        style={{ ...this.props.style }}
      >
        <div className={'CareerBox'}>
          <div className="float-left">
            <span>POSITION</span>
            <p className="CareerName">{this.props.data.name}</p>
          </div>
          <div className="float-right">
            <span className="CareerTime">Full Time</span>
            <i className={this.state.actived ? 'fa fa-arrow-up' : 'fa fa-arrow-down'} onClick={this.handleOpen}></i>
          </div>
        </div>
        {this.state.actived && (
        <div className={'CareerDetails'}>
          <p>{this.props.data.description}</p>
          <div className={'Row'}>
            {this.props.data.links.map((link, index) => (
              <div key={index} className={'Col Col-2'}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default withRouter(CareerItem);
