import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const SecondaryHeader = (params) => {
  return (
    <>
      <header className="header-part sticky">
        <nav className="navbar navbar-expand-lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <a className="logo" href="index-2.html">
              <img src="images/logo/logo.png" alt="logo" />
            </a>
            <h2
              style={{
                color: "#ffffff",
                fontSize: 50,
              }}
            >
              SOLAMEDIA
            </h2>
          </Grid>
        </nav>
      </header>

      <section id="banner-part" style={{ height: 260 }}>
        <div className="overlay" style={{ height: 260 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-text">
                  <h2> {params}</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item dot">
                        <Link to="/solamedia">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {params}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondaryHeader;
