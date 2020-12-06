/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as RoterLink } from "react-router-dom";
import Solamedia from "../assets/images/logo/LOGO.svg";
import Solamedia1 from "../assets/images/logo/output-onlinepngtools-ConvertImage.png";
import SimpleMenu from "../components/simpleMenu";
import { Button } from "@material-ui/core"

function Header() {
  const [drawer, toggleDrawer] = useState(false);

  const anchor = () => (
    <div>
      <ul>
        <li>
          <img src={Solamedia} alt="Solamedia" />
          <hr />
        </li>
        <li>
          <RoterLink to="/" className="nav-link" activeClass="nav-link" onClick={() => toggleDrawer(false)} style={{ color: '#ff69b4' }}>
            <i
              class="fa fa-home"
              aria-hidden="true"
              style={{ marginRight: 10 }}
            ></i>HOME</RoterLink>
        </li>
        <li>
          <RoterLink to="/events" className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
            style={{ color: '#ff69b4' }}
          > <i
            class="fa fa-calendar"
            aria-hidden="true"
            style={{ marginRight: 10 }}
          ></i>
            EVENTS
          </RoterLink>
        </li>
        <li>
          <RoterLink to="/event_bites" className="nav-link"
            activeClass="nav-link"
            onClick={() => toggleDrawer(false)}
            style={{ color: '#ff69b4' }}
          >
            <i
              class="fa fa-file-video-o"
              aria-hidden="true"
              style={{ marginRight: 10 }}
            ></i>
            EVENT-BITES</RoterLink>
        </li>
        <li>
          <a
            className="nav-link"
            activeClass="nav-link"
            style={{ color: '#ff69b4' }}
          >
            <i
              class="fa fa-picture-o"
              aria-hidden="true"
              style={{ marginRight: 10 }}
            >
              {" "}
            </i>
            PHOTOSHOOT
          </a>
          <div style={{ marginLeft: 10 }}>
            <ul >
              <li>
                <RoterLink to="/modelling-photoshoot" className="nav-link"
                  activeClass="nav-link"
                  style={{ color: '#ff69b4' }}
                  onClick={() => toggleDrawer(false)}
                > <i
                  class="fa fa-circle"
                  aria-hidden="true"
                  style={{ marginRight: 10 }}
                ></i>
            MODELS
          </RoterLink>
              </li>
              <RoterLink to="/celebrity-photoshoot" className="nav-link"
                activeClass="nav-link"
                onClick={() => toggleDrawer(false)}
                style={{ color: '#ff69b4' }}
              > <i
                class="fa fa-circle"
                aria-hidden="true"
                style={{ marginRight: 10 }}
              ></i>
            CELEBRITIES
          </RoterLink>
            </ul>
          </div>
        </li>


      </ul>
      <div style={{ margin: 15 }}>
        <div class="header-btn1">
          <RoterLink to="/book-now" onClick={() => toggleDrawer(false)} >Book Now</RoterLink>
        </div>
      </div>
    </div>
  );

  return (
    <header className="header-part sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container" style={{ display: 'flex' }}>
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
          <div style={{ display: "inline-block", margin: "0 auto", padding: 3 }}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li>
                  <img
                    src={Solamedia1}
                    alt="Solamedia"
                    style={{ height: 80, with: 80, marginRight: 40 }}
                  />
                </li>
                <li className="nav-item" >
                  <RoterLink to="/" className="nav-link"
                    activeClass="nav-link" style={{
                      fontSize: '40px',
                      fontWeight: 700,
                      color: '#ff69b4'
                    }}>HOME</RoterLink>
                </li>

                <li className="nav-item">
                  <RoterLink to="/events" className="nav-link"
                    activeClass="nav-link" style={{
                      fontSize: '40px',
                      fontWeight: 700,
                      color: '#ff69b4'
                    }}>EVENTS</RoterLink>
                </li>

                <li className="nav-item">
                  <RoterLink to="/event_bites" className="nav-link"
                    activeClass="nav-link" style={{
                      fontSize: '40px',
                      fontWeight: 700,
                      color: '#ff69b4',
                      whiteSpace: 'nowrap'
                    }}>EVENT-BITES</RoterLink>
                </li>
                <li>
                  <SimpleMenu />
                </li>
                <li  >
                  <Button variant="contained" color="secondary" href="/book-now" style={{ whiteSpace: 'nowrap', color: 'white', backgroundColor: '#ff69b4', marginTop: 10 }} >BOOK NOW</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
