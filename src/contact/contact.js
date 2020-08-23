import React, { useState } from "react";
import Image from "../assets/images/backgrounds/festive/festive-img2.png";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardContent,
  Grid,
} from "@material-ui/core";
import ReactMapGL, { Marker } from "react-map-gl";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  root1: {
    height: 500,
  },
  card: {
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    maxHeight: 250,
    minHeight: 250,
    width: "100%",
    objectFit: "inherit",
  },
  root2: {
    "& .MuiGrid-spacing-xs-3": {
      width: 100,
      margin: 0,
    },
  },
  cardroot: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
}));

function Contact() {
  const classes = useStyles();
  const staticviewport = {
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  };
  const [viewport, setViewPort] = useState(staticviewport);

  return (
    <section id="testimonial-part">
      <div className="container">
        <div className="section-title">
          <h2>Contact </h2>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.root2}>
            <Grid item xs={12} sm={6}>
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={
                  "pk.eyJ1Ijoia2FydGhpa3Rlc3QiLCJhIjoiY2tlNm11dm83MWU4ZjJzbGZneGJjejFsbCJ9.SqRGVy4tEtcEWH_4ths3Mw"
                }
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={(nextViewport) => setViewPort(nextViewport)}
              >
                {" "}
                <Marker
                  latitude={37.7577}
                  longitude={-122.4376}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <p>SOLAMEDIA</p>
                  <div className="mapMarkerStyle" />
                </Marker>
              </ReactMapGL>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardroot}>
                <div style={{ display: "flex" }}>
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{ color: "#ff69b4" }}
                  ></i>
                  <p style={{ marginLeft: 10, marginTop: -3 }}>Location</p>
                </div>
                <div style={{ display: "flex" }}>
                  <i
                    class="fa fa-phone"
                    aria-hidden="true"
                    style={{ color: "#ff69b4" }}
                  ></i>
                  <p style={{ marginLeft: 10, marginTop: -3 }}>Phone Numer</p>
                </div>
                <div style={{ display: "flex" }}>
                  <i
                    class="fa fa-envelope "
                    aria-hidden="true"
                    style={{ color: "#ff69b4" }}
                  ></i>
                  <p style={{ marginLeft: 10, marginTop: -3 }}>Email</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <i
                    class="fa fa-facebook-official fa-2x"
                    aria-hidden="true"
                    style={{ margin: 10, color: "#ff69b4" }}
                  ></i>
                  <i
                    class="fa fa-twitter fa-2x"
                    aria-hidden="true"
                    style={{ margin: 10, color: "#ff69b4" }}
                  ></i>
                  <i
                    class="fa fa-instagram fa-2x"
                    aria-hidden="true"
                    style={{ margin: 10, color: "#ff69b4" }}
                  ></i>
                  <i
                    class="fa fa-youtube-play fa-2x"
                    aria-hidden="true"
                    style={{ margin: 10, color: "#ff69b4" }}
                  ></i>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Contact;
