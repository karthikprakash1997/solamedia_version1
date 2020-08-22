import React from "react";
import LandingPage from "./landingPage/landignPage";
import { Route, Switch } from "react-router-dom";
import FullGallery from "./gallery/fullGallery";
import FullVideosTrailer from "./videos/fullVideosT";
import FullVideosEventBites from "./videos/fullVideosE";
import FullEvents from "./events/fullEvents";
import BookNow from "./bookNow/bookNow";

import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/venobox.css";
import "./assets/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Switch>
      <Route exact path="/solamedia" component={LandingPage} />
      <Route exact path="/videos/traiers" component={FullVideosTrailer} />
      <Route
        exact
        path="/videos/event-bites"
        component={FullVideosEventBites}
      />
      <Route exact path="/gallery/:type/:name" component={FullGallery} />
      <Route exact path="/events" component={FullEvents} />
      <Route exact path="/book-now" component={BookNow} />
    </Switch>
  );
}

export default App;
