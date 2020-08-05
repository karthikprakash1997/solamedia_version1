/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="header-part sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Celeberities"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Celeberities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Events"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="Videos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Videos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="Gallery"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Gallery"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  PR News
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="example-destination"
                  spy={true}
                  smooth={true}
                  duration={900}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Feedback"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
