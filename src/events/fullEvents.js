import React from "react";
import events from "../data/events.json";
import FullGallery from "../gallery/fullGallery";

function FullEvents() {
  return (
    <>
          <FullGallery name={events}/>
    </>
  );
}

export default FullEvents;
