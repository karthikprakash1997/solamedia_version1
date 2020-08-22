import React from "react";
import speaker1 from "../assets/images/testImages/testimonial-img1.png";
import Slider from "react-slick";
import cx from "clsx";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
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

const data = [
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "images/testimonial/testimonial-img1.png",
  },
];
function Feedback() {
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
        <div className="section-title">
          <h2>Feedback</h2>
        </div>
        <div className="row testimonial-active">
          <div className="col-lg-12  col-md-12">
            <Slider {...settings}>
              {data.map((_1, index) => (
                <Card className={cx(styles.root)}>
                  <div className="single-testimonial">
                    <p className="testi-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed dosmod tempor incididunt ut labore etdolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <div className="testi-img">
                      <img src={speaker1} alt="testimonial-img1" />
                      <div className="icon">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                    <h4 className="name">Jonathon Reverse</h4>
                    <p className="designation">Event Sponsor</p>
                  </div>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
