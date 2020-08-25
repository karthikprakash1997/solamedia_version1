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
import { Link, useHistory } from "react-router-dom";
import events from "../data/events.json";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";
import Slider from "react-slick";

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
  slides: {
    "& .slick-prev": {
      left: "3%",
      zIndex: 1,
    },
    "& .slick-next": {
      right: "3%",
      zIndex: 1,
    },
    "& .slick-slide": {
      padding: "0 10px",
    },
  },
});

function Events() {
  const classes = useStyles();
  const history = useHistory();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    arrows: true,
    className: classes.slides,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonial-part" style={{ marginTop: -40 }}>
      <div className="container">
        <div className="section-title">
          <h2>Events </h2>
        </div>
        <div className="row testimonial-active">
          <div className="col-lg-12  col-md-12">
            <Slider {...settings}>
              {events.map((data, index) => (
                <Card
                  className={classes.root}
                  onClick={() => {
                    history.replace({
                      pathname: `/events/${data.title}`,
                    });
                  }}
                >
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div class="gallery-btn" style={{ marginTop: 20 }}>
        <Link to="/events/all">See More</Link>
      </div>
    </section>
  );
}

export default Events;
