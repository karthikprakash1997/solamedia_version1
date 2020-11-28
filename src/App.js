import React from "react";
import LandingPage from "./landingPage/landignPage";
import { Route, Switch } from "react-router-dom";
import FullCelebrity from "./gallery/fullCelebrity";
import FullModal from "./gallery/fullModal";


import FullVideosEventBites from "./videos/fullVideosE";
import FullEvents from "./events/fullEvents";
import Events from "./events/events";
import BookNow from "./bookNow/bookNow";
import Header from "./header/header";
import Footer from "./footer/footer";
import CarouselComp from "./components/carousel";

import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/venobox.css";
import "./assets/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <Header />
      <CarouselComp />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/event_bites"
          component={FullVideosEventBites}
        />
        <Route exact path="/events" component={Events} />
        <Route exact path="/celebrity-photoshoot" component={FullCelebrity} />
        <Route exact path="/modelling-photoshoot" component={FullModal} />
        <Route exact path="/book-now" component={BookNow} />
        <Route exact path="/events/:name" component={FullEvents} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
