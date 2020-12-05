import React from "react";
import LandingPage from "./landingPage/landignPage";
import { Route, Switch } from "react-router-dom";
import FullCelebrity from "./gallery/fullCelebrity";
import FullModal from "./gallery/fullModal";
import Celeb from "./gallery/actor/actor";
import Model from "./gallery/actress/actress";


import FullVideosEventBites from "./videos/fullVideosE";
import FullEvents from "./events/fullEvents";
import Events from "./events/events";
import BookNow from "./bookNow/bookNow";
import Header from "./header/header";
import Footer from "./footer/footer";
import CarouselComp from "./components/carousel";

import "./assets/css/slick.css";
import "./assets/css/ember.css";
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
      <div class="main-wrapper">

        <div class="backgrounds">
          <div class="left-bg"></div>
          <div class="right-bg"></div>
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/event_bites"
            component={FullVideosEventBites}
          />
          <Route exact path="/events" component={Events} />
          <Route exact path="/celebrity-photoshoot/" component={Celeb} />
          <Route exact path="/celebrity-photoshoot/:name" component={FullCelebrity} />
          <Route exact path="/modelling-photoshoot/:name" component={FullModal} />
          <Route exact path="/modelling-photoshoot" component={Model} />
          <Route exact path="/book-now" component={BookNow} />
          <Route exact path="/events/:name" component={FullEvents} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
