import React from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import eventBites from "../data/eventBites.json";
import { Card, CardActionArea, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player/lazy";

const useStyles = makeStyles({
  root: {
    height: 320,
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

function FullEvents() {
  const classes = useStyles();
  return (
    <>
      <section id="testimonial-part">
        <div className="container">
        <div className="section-title">
          <h2>EVENT BITES </h2>
        </div>
          <div className="row testimonial-active">
            {eventBites.map((value, index) => (
              <div
                className="col-lg-4"
                key={index}
                style={{ marginBottom: 20 }}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <ReactPlayer url={value} width={"100%"} height={300} />
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FullEvents;
