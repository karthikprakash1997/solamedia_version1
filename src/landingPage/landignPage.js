import React from "react";
import { Element } from "react-scroll";
import Header from "../header/header";
import MainContent from "../mainContent/mainContent";
import Scheduler from "../scheduler/scheduler";
import Events from "../events/events";
import Gallery from "../gallery/gallery";
import Feedback from "../feedback/feedback";
import Footer from "../footer/footer";
import Introduction from "../introduction/introduction";
import Videos from "../videos/videos";

function LandingPage() {
  return (
    <>
      <Header />
      <MainContent />
      <Element id="About" name="About">
        <Introduction />
      </Element>
      <Element id="Celeberities" name="Celeberities">
        <Scheduler />
      </Element>
      <Element id="Events" name="Events">
        <Events />
      </Element>
      <Element id="Videos" name="Videos">
        <Videos />
      </Element>
      <Element id="Gallery" name="Gallery">
        <Gallery />
      </Element>
      <Element id="Feedback" name="Feedback">
        <Feedback />
      </Element>
      <Element id="Contact" name="Contact">
        <Footer />
      </Element>
    </>
  );
}

export default LandingPage;