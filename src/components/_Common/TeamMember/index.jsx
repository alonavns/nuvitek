import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class TeamMember extends Component {
  render() {
    var socials = [];
    for(var k in this.props.data.social) {
      var name = k.replace(/^social\./, '').toLowerCase();
      socials.push({ name, link: this.props.data.social[k] });
    }
    return (
      <div className="TeamMember">
        <img src={this.props.data.avatar} alt='' />
        <h2>{this.props.data.name}</h2>
        <div className="JobTitle">{this.props.data.title}</div>
        <p>{this.props.data.bio}</p>
        {socials.map((social, index) => (
          <NavLink key={index} className="Logo" to={social.link} target="_blank">
            <i className={"fa fa-" + social.name}></i>
          </NavLink>
        ))}
      </div>
    )
  }
}

export default withRouter(TeamMember);
