import React from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardContent,
  Grid,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
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
  root2: {
    "& .MuiGrid-spacing-xs-3": {
      width: 100,
      margin: 0,
    },
  },
  root3: {
    flexGrow: 1,
    margin: 20,
  },
});

function FullGallery() {
  const classes = useStyles();
  return (
    <>
      {SecondaryHeader("Events")}
      <div className={classes.root3}>
        <Grid container spacing={3} className={classes.root2}>
          {events.map((data, index) => (
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
        </Grid>
      </div>
    </>
  );
}

export default FullGallery;
