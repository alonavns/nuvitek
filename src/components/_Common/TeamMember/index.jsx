import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class TeamMember extends Component {
  render() {
    return (
      <div className="TeamMember">
        <img src={this.props.data.photo} alt='' />
        <h2>{this.props.data.name}</h2>
        <div className="JobTitle">{this.props.data.jobtitle}</div>
        <p>{this.props.data.description}</p>
        {this.props.data.socials.map((social, index) => (
          <NavLink key={index} className="Logo" to={social.link} target="_blank">
            <i className={"fa fa-" + social.name}></i>
          </NavLink>
        ))}
      </div>
    )
  }
}

export default withRouter(TeamMember);
