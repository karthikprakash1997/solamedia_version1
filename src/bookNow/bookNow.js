import React, { useState, useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
  CircularProgress,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Carousel from 'react-material-ui-carousel'

const data = [
  {
    program: "BRAND MANAGEMENT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://i.ibb.co/6BkGPV4/Brand-management.webp",
  },
  {
    program: "CELEBRITY MANAGEMENT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://i.ibb.co/2Wqx0Tc/Celebrity-management-bookings.jpg",
  },
  {
    program: "LIVE CONCERTS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://i.ibb.co/4P8LmgQ/Live-concerts.webp",
  },
  {
    program: "PHOTOGRAPHY SHOOT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://i.ibb.co/n8T2X1g/Photography-shoot.jpg",
  },
  {
    program: "TALENT MANAGEMENT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, seddosmod tempor incididunt ut labore etdolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://i.ibb.co/6mHhFjs/Talent-management-jpg.webp",
  },
];

function Alert(props) {
  return <MuiAlert elevation={6} constiant="filled" {...props} />;
}

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
    maxHeight: 250,
    minHeight: 250,
    width: "100%",
    objectFit: "inherit",
  },
  root2: {
    "& .MuiGrid-spacing-xs-3": {
      width: 100,
      margin: 0,
    },
  },
}));

const FullGallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarError, setSnackBarError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [programBooked, setProgram] = useState("");

  const handleClose = () => setOpen(false);
  const handleClickOpen = (name) => {
    setOpen(true);
    setProgram(name);
  };
  const handlesncakBarClose = () => setSnackBarOpen(false);

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
            date: new Date(),
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(20).required("A valid Name is required"),
            email: Yup.string().email().required(" A valid email is required"),
            phoneNumber: Yup.string()
              .max(10)
              .required(" A valid phone number  is required"),
            date: Yup.string().required(" A valid date is required"),
          })}
          onSubmit={(values) => {
            setIsLoading(true);
            const template_params = {
              to_program: programBooked,
              to_name: values.name,
              to_email: values.email,
              to_phone_number: values.phoneNumber,
              to_date: values.date,
            };
            const service_id = "service_z0m9nah";
            const template_id = "template_vdwla8YV";
            // email js account is karthiktestunofficial need to change it if needed
            emailjs
              .send(
                service_id,
                template_id,
                template_params,
                "user_ygDRAFvC7wEVoQkB9fiFS"
              )
              .then(function () {
                setSnackBarOpen(true);
                setSnackBarError(false);
                setOpen(false);
                setIsLoading(false);
              })
              .catch(function () {
                setSnackBarError(true);
                setSnackBarOpen(true);
                setIsLoading(false);
              });
          }}
        >
          {({
            errors,
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
                    Thanks for choosing Solamedia, please fill in the details, our executive will contact your shortly.
                </DialogContentText>
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
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}
                    color={"secondary"}
                  >
                    <Grid container>
                      <DateTimePicker
                        style={{ width: "100%" }}
                        constiant="inline"
                        label="Date"
                        name="date"
                        disablePast
                        value={values.date}
                        showTodayButton
                        onChange={(event) => {
                          setFieldValue("date", event);
                        }}
                        color={"secondary"}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </DialogContent>
                <DialogActions>
                  {isLoading && (
                    <>
                      <CircularProgress color="secondary" size={15} />
                      <span>Please Wait...</span>
                    </>
                  )}
                  {!isLoading && (
                    <>
                      <Button
                        onClick={handleClose}
                        color="secondary"
                        disabled={isLoading}
                      >
                        Cancel
                    </Button>
                      <Button
                        color="secondary"
                        type="submit"
                        disabled={isLoading}
                      >
                        Submit
                    </Button>
                    </>
                  )}
                </DialogActions>
              </form>
            )}
        </Formik>
      </Dialog>
    ),
    [programBooked, isLoading]
  );

  return (
    <>
      <section id="testimonial-part">
        {/* <Carousel
          indicators={false}
          navButtonsAlwaysVisible={false}
          animation={"fade"}
          timeout={1000}
          autoPlay
        // style={{ width: "100%" }}
        >
          {[1, 2].map(() => (<img src={concert}
            alt="pic"
            style={{
              height: 400,
              objectFit: "cover",
              alignContent: 'center',
              alignSelf: 'center'
            }} />))}
        </Carousel> */}
        <div className="container">
        <div className="section-title">
          <h2>Book Now</h2>
        </div>
          <div className="row testimonial-active"
          >
            {data.map((value, index) => (
              <div
                className="col-lg-3"
                key={index}
                style={{ marginBottom: 20 }}
              >
                <Card className={classes.card}>
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
                      <Typography gutterBottom constiant="h5" component="h2">
                        {value.program}
                      </Typography>
                      <Typography component="div">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleClickOpen(value.program)}
                        >
                          Book Now
                        </Button>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handlesncakBarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handlesncakBarClose}
          severity={!snackBarError ? "success" : "error"}
        >
          {!snackBarError
            ? "Your booking has been done an executive will contact you shortly"
            : "Oops! somthing went wrong please try again."}
        </Alert>
      </Snackbar>
      {open && form(handleClose, open)}
    </>
  );
};

export default FullGallery;
