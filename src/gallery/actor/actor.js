/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
import cx from "clsx";
import { Link, useHistory } from "react-router-dom";

import {
  Card,
  CardMedia,
  Typography,
  makeStyles,
  CardContent,
} from "@material-ui/core";

export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

const data = [
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
  {
    name: "kp",
    designation: "Actor",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 280,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    borderRadius: 6,
    height: 220,
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

function Actor() {
  const history = useHistory();
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
    <section id="testimonial-part" style={{ marginTop: -100 }}>
      <div className="container">
        <div className="section-title" style={{ marginTop: -20 }}>
          <h4>Actor </h4>
        </div>
        <div className="row testimonial-active">
          <div className="col-lg-12  col-md-12">
            <Slider {...settings}>
              {data.map((value, index) => (
                <Card
                  className={cx(styles.root)}
                  onClick={() => {
                    history.replace({
                      pathname: `/gallery/Actor/${value.name}`,
                    });
                  }}
                >
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
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
        <div class="gallery-btn" style={{ marginTop: 30 }}>
          <Link to="/gallery/Actor/all">See All</Link>
        </div>
      </div>
    </section>
  );
}

export default Actor;
