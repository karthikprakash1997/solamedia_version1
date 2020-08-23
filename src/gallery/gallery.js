import React from "react";
import Movies from "./movies/movies";
import Actor from "./actor/actor";
import Actress from "./actress/actress";

function GalleryView() {
  return (
    <>
      <div className="section-title" style={{ marginTop: 50 }}>
        <h2>Gallery </h2>
      </div>
      <Actor />
      <Actress />
      <Movies />
    </>
  );
}

export default GalleryView;
