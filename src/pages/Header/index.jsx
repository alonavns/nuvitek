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
    label: "About",
    // url: "/about"
    children: [
      {
        label: "Company",
        url: "/about-us"
      },
      {
        label: "Success Stories",
        url: "/stories"
      },
      {
        label: "Contract Vehicles",
        url: "/vehicles"
      },
    ]
  },
  {
    label: "Services",
    // url: "/services"
    children: [
      {
        label: "Cloud",
        url: "/cloud"
      },
      {
        label: "Automation",
        url: "/automation"
      },
      {
        label: "Transformation",
        url: "/transformation"
      },
    ]
  },
  {
    label: "Careers",
    url: "/careers"
  },
  {
    label: "News",
    url: "/news"
  }
];

class Header extends Component {
  state = {
    mobileNavState: false,
    activedSubmenu: -1,
  }
  handleMobileNavButton = () => {
    this.setState({ mobileNavState: !this.state.mobileNavState })
  }
  handleMobileSubMenu = (index) => {
    this.setState({ activedSubmenu: index });
  }
  handleContactUs = (e) => {
    this.props.history.push('/contact-us');
  }
  render() {
    return (
      <div className="HeaderWrapper">
        <NavLink className="Logo" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="NavBarDesktop">
          <div className="NavWrapper white">
            {LINKS.map((link, index) => {
              if (link.children) {
                return (
                  <span key={index}>
                    {link.label} <i className={'fa fa-angle-down'}></i>
                    <ul>
                    {
                      link.children.map((clink, cindex) => (
                        <li key={cindex}>
                          <NavLink to={clink.url}>{clink.label}</NavLink>
                        </li>
                      ))
                    }
                    </ul>
                  </span>
                )
              } else {
                return (
                  <NavLink key={index} to={link.url} activeClassName="Active">
                    {link.label}
                  </NavLink>
                )
              }
            })}
          </div>
          <Button label="Contact Us" onClick={this.handleContactUs} />
        </div>
        <div className="NavBarMobile">
          <div className={"NavBarMobileButton" + (this.state.mobileNavState ? ' opened' : '')} onClick={this.handleMobileNavButton}></div>
          <div className={"NavBarMobileMenus" + (this.state.mobileNavState ? ' opened' : '')}>
            <ul className="NavWrapper">
              {LINKS.map((link, index) => {
                if (link.children) {
                  return (
                    <li key={index} className={this.state.activedSubmenu == index ? 'actived' : ''}>
                      <span onClick={e => {this.handleMobileSubMenu(index)}}>{link.label} <i className={'fa fa-angle-' + (this.state.activedSubmenu == index ? 'down' : 'right')}></i></span>
                      <ul>
                      {
                        link.children.map((clink, cindex) => (
                          <li key={cindex} onClick={this.handleMobileNavButton}>
                            <NavLink to={clink.url}>{clink.label}</NavLink>
                          </li>
                        ))
                      }
                      </ul>
                    </li>
                  )
                } else {
                  return (
                    <li key={index} onClick={this.handleMobileNavButton}>
                      <NavLink to={link.url} activeClassName="Active">
                        {link.label}
                      </NavLink>
                    </li>
                  )
                }
              })}
            </ul>
            <Button label="Contact Us" onClick={this.handleContactUs} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
