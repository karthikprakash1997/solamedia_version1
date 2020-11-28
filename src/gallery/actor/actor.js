/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
import cx from "clsx";
import { Link, useHistory } from "react-router-dom";
import model from "../../data/celebrity.json";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";

import {
  Card,
  CardMedia,
  Typography,
  makeStyles,
  CardContent,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 290,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    borderRadius: 6,
    height: 220,
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

function Actress() {
  const history = useHistory();
  const styles = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <section id="testimonial-part" >
        <div className="container">
        <div className="section-title">
          <h2>CELEBRITY PHOTOSHOOT</h2>
        </div>
          <div className="row testimonial-active">
            {model.map((value, index) => (
                                <div
                                className="col-lg-3"
                                key={index}
                                style={{ marginBottom: 20,cursor:'pointer' }}
                              >
                  <Card
                    className={cx(styles.root)}
                    onClick={() => {
                      history.push({
                        pathname: `/celebrity-photoshoot/${value.title}`,
                      });
                    }}
                    key={index}
                  >
                    {" "}
                    <LazyLoad
                      placeholder={
                        <div className="section-title">
                          <CircularProgress
                            color="secondary"
                            size={100}
                            style={{ marginTop: 74 }}
                          />
                        </div>
                      }
                      once={true}
                      debounce={500}
                  >
                            <Carousel
            autoPlay
            timer={500}
            animation="fade"
            indicators={false}
            timeout={500}
            navButtonsAlwaysInvisible={true}
        >
                      {value.images.map(image => (
                        <CardMedia
                        className={cx(styles.media)}
                        image={image}
                        component="img"
                      />
                      ))} 
                      </Carousel>
                    </LazyLoad>
                    <CardContent
                      style={{ display: "flex", justifyContent: "center", objectFit:"content" }}
                    >
                    {value.title === 'ACTRESS AMIRTHA IYER' ?
                      <Typography  style={{fontSize:17,fontWeight:'bold'}}>
                      {value.title}
                    </Typography>:
                      <Typography component="h6" variant="h6">
                      {value.title}
                    </Typography>}
                    </CardContent>
                </Card>
            </div>
                
                ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Actress;
