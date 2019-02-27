import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Button } from "components/_Common";
import logo from "assets/images/logo_name.svg";

const LINKS = [
  {
    label: "Home",
    url: "/home"
  },
  {
    label: "Services",
    url: "/services"
  },
  {
    label: "About",
    url: "/about"
  },
  {
    label: "News",
    url: "/news"
  },
  {
    label: "Team",
    url: "/team"
  }
];

class Header extends Component {
  render() {
    return (
      <div className="HeaderWrapper">
        <NavLink className="Logo" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="NavWrapper white">
          {LINKS.map((link, index) => (
            <NavLink key={index} to={link.url} activeClassName="Active">
              {link.label}
            </NavLink>
          ))}
        </div>
        <Button label="Contact Us" />
      </div>
    );
  }
}

export default withRouter(Header);
