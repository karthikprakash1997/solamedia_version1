import React from "react";
import LandingPage from "./landingPage/landignPage";
import { Route, Switch } from "react-router-dom";
import FullGallery from "./gallery/fullGallery";
import FullVideosEventBites from "./videos/fullVideosE";
import FullEvents from "./events/fullEvents";
import BookNow from "./bookNow/bookNow";
import Events from "./events/events";
import Header from "./header/header";
import Footer from "./footer/footer";

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
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/gallery" component={FullGallery} />
        <Route
          exact
          path="/event_bites"
          component={FullVideosEventBites}
        />
        {/* <Route exact path="/gallery/:type/:name" component={FullGallery} /> */}
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:name" component={FullEvents} />
        <Route exact path="/tab1" component={FullEvents} />
        <Route exact path="/tab2" component={FullEvents} />
        <Route exact path="/tab3" component={FullEvents} />
        <Route exact path="/book-now" component={BookNow} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
