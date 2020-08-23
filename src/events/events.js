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

const data = [
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
  },
];

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
          {data.map((_1, index) => (
            <div className="col-lg-4" key={index} style={{ marginBottom: 20 }}>
              <Card className={classes.root}>
                <CardActionArea>
                  <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={false}
                    animation={"fade"}
                    timeout={1000}
                  >
                    {data.map((value, index) => (
                      <CardMedia
                        key={index}
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={value.image}
                        title="Contemplative Reptile"
                      />
                    ))}
                  </Carousel>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
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
