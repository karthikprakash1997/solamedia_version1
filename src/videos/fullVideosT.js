import React from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import trailer from "../data/trailers.json";
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
      {SecondaryHeader("Videos-Trailers")}
      <section id="testimonial-part">
        <div className="container">
          <div className="row testimonial-active">
            {trailer.map((value, index) => (
              <div
                className="col-lg-4"
                key={index}
                style={{ marginBottom: 20 }}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <ReactPlayer url={value.url} width={"100%"} height={300} />
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
