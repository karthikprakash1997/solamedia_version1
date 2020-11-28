import React from "react";
import actor from "../data/movies.json";
import FullGallery from "./fullGallery";

function FullActor() {
  return (
    <>
          <FullGallery name={actor}/>
    </>
  );
}

export default FullActor;
