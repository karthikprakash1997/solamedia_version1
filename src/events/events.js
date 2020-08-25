import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardContent,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import events from "../data/events.json";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 320,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    height: 250,
    borderRadius: 6,
    objectFit: "inherit",
  },
});

function Events() {
  const classes = useStyles();
  return (
    <section id="testimonial-part" style={{ marginTop: -40 }}>
      <div className="container">
        <div className="section-title">
          <h2>Events </h2>
        </div>
        <div className="row testimonial-active">
          {events.slice(0, 3).map((data, index) => (
            <div className="col-lg-4" key={index} style={{ marginBottom: 20 }}>
              <Card className={classes.root}>
                <CardActionArea>
                  <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={false}
                    animation={"fade"}
                    timeout={1000}
                  >
                    {data.images.map((value, index) => (
                      <LazyLoad
                        placeholder={
                          <div className="section-title">
                            <CircularProgress color="secondary" size={100} />
                          </div>
                        }
                        once={true}
                        debounce={500}
                      >
                        <CardMedia
                          key={index}
                          className={classes.media}
                          component="img"
                          alt={data.title}
                          height="200"
                          image={value.toString()}
                        />{" "}
                      </LazyLoad>
                    ))}
                  </Carousel>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div class="gallery-btn">
        <Link to="/events">See More</Link>
      </div>
    </section>
  );
}

export default Events;
