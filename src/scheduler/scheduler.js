/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import speaker1 from "../assets/images/testImages/speaker-img1.png";
import Slider from "react-slick";
import cx from "clsx";
import {
  Card,
  CardMedia,
  Typography,
  makeStyles,
  CardContent,
} from "@material-ui/core";

const data = [
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
  {
    name: "kp",
    designation: "actor",
    image: speaker1,
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 270,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    borderRadius: 6,
    height: 180,
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

function Scheduler() {
  const styles = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    arrows: true,
    className: styles.slides,
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
    <section id="testimonial-part">
      <div className="container">
        <div className="section-title">
          <h2>Celeberities </h2>
        </div>
        <div className="row testimonial-active">
          <div className="col-lg-12  col-md-12">
            <Slider {...settings}>
              {data.map((value, index) => (
                <Card className={cx(styles.root)} key={index}>
                  <CardMedia
                    className={cx(styles.media)}
                    image={
                      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    }
                  />
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      Arya
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Actor
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scheduler;
