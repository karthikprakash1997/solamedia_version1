import React from "react";
import { Card, CardActionArea, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

const data = [
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://www.youtube.com/watch?v=8JvnNxYgro0",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://www.youtube.com/watch?v=8JvnNxYgro0",
  },
  {
    name: "Ajay",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://www.youtube.com/watch?v=8JvnNxYgro0",
  },
];

const useStyles = makeStyles({
  root: {
    height: 300,
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.1)",
  },
  media: {
    height: 200,
  },
});

function Videos() {
  const classes = useStyles();
  return (
    <section id="testimonial-part">
      <div className="container">
        <div className="section-title">
          <h2>Videos </h2>
        </div>
        <div className="section-title" style={{ marginTop: -20 }}>
          <h4>Event Bites </h4>
        </div>
        <div className="row testimonial-active">
          {data.map((_1, index) => (
            <div className="col-lg-4" key={index} style={{ marginBottom: 20 }}>
              <Card className={classes.root}>
                <CardActionArea>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width={"100%"}
                    height={300}
                  />
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        <div class="gallery-btn">
          <Link to="/videos/event-bites">See More</Link>
        </div>
        <div className="section-title" style={{ marginTop: 30 }}>
          <h4>Trailers</h4>
        </div>
        <div className="row testimonial-active">
          {data.map((_1, index) => (
            <div className="col-lg-4" key={index} style={{ marginBottom: 20 }}>
              <Card className={classes.root}>
                <CardActionArea>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width={"100%"}
                    height={300}
                  />
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div class="gallery-btn">
        <Link to="/videos/traiers">See More</Link>
      </div>
    </section>
  );
}

export default Videos;
