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
    image: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
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
    height: 300,
  },
  media: {
    height: 200,
  },
});

function UpcomingEvents() {
  const classes = useStyles();
  return (
    <section id="testimonial-part">
      <div class="container">
        <div class="section-title">
          <h2>Events </h2>
        </div>
        <div class="row testimonial-active">
          {data.map(() => (
            <div class="col-lg-4">
              <Card className={classes.root}>
                <CardActionArea>
                  <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={false}
                    animation={"fade"}
                    timeout={1000}
                  >
                    {data.map((value) => (
                      <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={value.image}
                        title="Contemplative Reptile"
                      />
                    ))}
                  </Carousel>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        {/* <div class="section-title">
          <h4>More </h4>
        </div> */}
      </div>
    </section>
  );
}

export default UpcomingEvents;
