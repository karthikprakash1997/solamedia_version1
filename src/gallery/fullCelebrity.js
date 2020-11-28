import React from "react";
import actor from "../data/celebrity.json";
import FullGallery from "./fullGallery";

function FullCelebrity() {
  return (
    <>
          <FullGallery name={actor}/>
    </>
  );
}

export default FullCelebrity;
