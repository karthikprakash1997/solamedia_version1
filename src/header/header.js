import React from "react";

function Header() {
  return (
    <header class="header-part sticky">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index-2.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Celebrities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Feedback
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  PR News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
