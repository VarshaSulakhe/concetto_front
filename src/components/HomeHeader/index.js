import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    let scrollTop = window.pageYOffset;
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    this.props.onToggleMenu && this.props.onToggleMenu(!isMenuOpen)
    if (!isMenuOpen)
      window.scrollTo(0, scrollTop + window.innerHeight / 10 + 1);
    else window.scrollTo(0, scrollTop - window.innerHeight / 10 - 1);
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="home">
            <span className="helper"></span>
          </a>
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onClick={this.toggleMenu}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <br />
              <li>
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={this.toggleMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/events"
                  onClick={this.toggleMenu}
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/coming_soon"
                  onClick={this.toggleMenu}
                >
                  WORKSHOPS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/coming_soon"
                  onClick={this.toggleMenu}
                >
                  EXHIBITION
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={this.toggleMenu}
                >
                  LOGIN
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="/our_team"
                  onClick={this.toggleMenu}
                >
                  OUR TEAM
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link"
                  to="/coming_soon"
                  onClick={this.toggleMenu}
                >
                  CAP
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link"
                  to="/coming_soon"
                  onClick={this.toggleMenu}
                >
                  GUEST TALKS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav role="navigation"></nav>
      </div>
    );
  }
}

export default Header;
