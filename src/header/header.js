/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as RoterLink } from "react-router-dom";

function Header() {
  const [drawer, toggleDrawer] = useState(false);

  const anchor = () => (
    <div>
      <ul>
        <li>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Celeberities"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Celeberities
          </Link>
        </li>
        <li>
          <Link
            to="Events"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Events
          </Link>
        </li>

        <li>
          <Link
            to="Videos"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Videos
          </Link>
        </li>

        <li>
          <Link
            to="Gallery"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="Gallery"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            PR News
          </Link>
        </li>
        <li>
          <Link
            to="example-destination"
            spy={true}
            smooth={true}
            duration={900}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="Feedback"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div class="header-btn">
        <RoterLink to="/book-now">Book Now</RoterLink>
      </div>
    </div>
  );
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
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <SwipeableDrawer
            anchor="left"
            open={drawer}
            onClose={() => toggleDrawer(false)}
          >
            {drawer && anchor()}
          </SwipeableDrawer>
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
            <div class="header-btn">
              <RoterLink to="/book-now">Book Now</RoterLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
