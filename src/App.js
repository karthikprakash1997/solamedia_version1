import React from "react";
import LandingPage from "./landingPage/landignPage";
import { Route, Switch } from "react-router-dom";
import FullActor from "./gallery/fullActor";
import FullActress from "./gallery/fullActress";
import FullMovies from "./gallery/fullMovies";
import FullCelebrity from "./gallery/fullCelebrity";
import FullModal from "./gallery/fullModal";


import FullVideosEventBites from "./videos/fullVideosE";
import FullEvents from "./events/fullEvents";
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
        <Route exact path="/gallery/actor" component={FullActor} />
        <Route exact path="/gallery/actress" component={FullActress} />
        <Route exact path="/gallery/movies" component={FullMovies} />
        <Route
          exact
          path="/event_bites"
          component={FullVideosEventBites}
        />
        <Route exact path="/events" component={FullEvents} />
        <Route exact path="/celebrity-photoshoot" component={FullCelebrity} />
        <Route exact path="/modelling-photoshoot" component={FullModal} />
        <Route exact path="/book-now" component={BookNow} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
