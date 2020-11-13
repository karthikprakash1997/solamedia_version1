import React from "react";
import { Element } from "react-scroll";
import Header from "../header/header";
import MainContent from "../mainContent/mainContent";
import Feedback from "../feedback/feedback";
import Footer from "../footer/footer";
import Introduction from "../introduction/introduction";
import Contact from "../contact/contact";

function LandingPage() {
  return (
    <>
      <Header />
      <MainContent />
      <Element id="About" name="About">
        <Introduction />
      </Element>
      <Element id="Feedback" name="Feedback">
        <Feedback />
      </Element>
      <Element id="Contact" name="Contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default LandingPage;
