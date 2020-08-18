import React, { useState, useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  DialogContentText,
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
    image: "https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg",
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  root1: {
    height: 500,
  },
  media: {
    height: 250,
  },
  root2: {
    "& .MuiGrid-spacing-xs-3": {
      width: 100,
      margin: 0,
    },
  },
}));

const BookNow = "Book Bow";

const FullGallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClickOpen = () => setOpen(true);

  const form = useCallback(
    (handleClose, open) => (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            date: "",
            time: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(20).required("A valid Name is required"),
            email: Yup.string().required(" A valid email is required"),
            phoneNumber: Yup.number()
              .max(10)
              .required(" A valid phone number  is required"),
            date: Yup.date().required(" A valid date is required"),
            time: Yup.date().required(" A valid time is required"),
          })}
          onSubmit={() => {
            console.log("submitted");
            var templateParams = {
              name: "James",
              notes: "Check this out!",
            };

            // emailjs
            //   .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            //   .then(
            //     function (response) {
            //       console.log("SUCCESS!", response.status, response.text);
            //     },
            //     function (error) {
            //       console.log("FAILED...", error);
            //     }
            //   );
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Booking Detials</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                {console.log("render")}
                <TextField
                  autoFocus
                  color="secondary"
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  value={values.name}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  color="secondary"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                  value={values.email}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="phoneNumber"
                  color="secondary"
                  label="Phone Number"
                  type="text"
                  onChange={handleChange}
                  fullWidth
                  value={values.phoneNumber}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="date"
                  label="Date"
                  color="secondary"
                  type="date"
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={values.date}
                  error={Boolean(touched.date && errors.date)}
                  helperText={touched.date && errors.date}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  color="secondary"
                  id="time"
                  label="Time"
                  onChange={handleChange}
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={values.time}
                  error={Boolean(touched.time && errors.time)}
                  helperText={touched.time && errors.time}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button color="secondary" type="submit">
                  Submit
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    ),
    []
  );

  return (
    <>
      <header className="header-part sticky">
        <nav className="navbar navbar-expand-lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <a className="logo" href="index-2.html">
              <img src="images/logo/logo.png" alt="logo" />
            </a>
            <h2
              style={{
                color: "#ffffff",
                fontSize: 50,
              }}
            >
              SOLAMEDIA
            </h2>
          </Grid>
        </nav>
      </header>

      <section id="banner-part" style={{ height: 260 }}>
        <div className="overlay" style={{ height: 260 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-text">
                  <h2> Book Now</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item dot">
                        <Link to="/solamedia">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Book Now
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.root2}>
          {data.map((value, index) => (
            <Grid item xs={12} sm={3}>
              <Card>
                <CardActionArea>
                  <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={false}
                    animation={"fade"}
                    timeout={1000}
                  >
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={value.image}
                      title="Contemplative Reptile"
                    />
                  </Carousel>
                  <CardContent style={{ justifyContent: "center" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography component="div">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                      >
                        Book Now
                      </Button>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {open && form(handleClose, open)}
    </>
  );
};

export default FullGallery;
