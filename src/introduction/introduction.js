import React from "react";
import Image from "../assets/images/backgrounds/festive/festive-img2.png";
import { Card, makeStyles, Grid, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  root1: {
    height: 500,
  },
  card: {
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  media: {
    height: 380,
    width: "100%",
    objectFit: "inherit",
  },
  root2: {
    "& .MuiGrid-spacing-xs-3": {
      width: 100,
      margin: 0,
    },
  },
  cardroot: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
}));

function Introduction() {
  const classes = useStyles();

  return (
    <section id="testimonial-part">
      <div className="container">
        <div className="section-title">
          <h2>About us </h2>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.root2}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardroot}>
                <CardMedia className={classes.media} image={Image} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.cardroot}>
                <p className="fest-para1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostr ud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="fest-para2">
                  Duis aut e irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat n ulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim laborum. Sed ut perspiciatis unde omnis
                  ist e natus error sit voluptatem accusantium doloremque
                  laudantium, totam aperiam.
                </p>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
