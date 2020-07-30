import React from "react";
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Scheduler from "./scheduler/scheduler";
import Events from "./events/events";
import Gallery from "./gallery/gallery";
import Feedback from "./feedback/feedback";
import Footer from "./footer/footer";
import Introduction from "./introduction/introduction";

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
      <MainContent />
      <Introduction />
      <Scheduler />
      <Events />
      <Gallery />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;