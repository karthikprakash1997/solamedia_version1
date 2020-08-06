import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function SecondaryHeader(params) {
  return (
    <>
      <header class="header-part sticky">
        <nav class="navbar navbar-expand-lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <a class="logo" href="index-2.html">
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

      <section id="banner-part">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="banner-text">
                  <h2>Gallery</h2>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item dot">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
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
}

export default SecondaryHeader;
