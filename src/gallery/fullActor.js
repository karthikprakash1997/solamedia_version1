import React from "react";
import actress from "../data/actors.json";
import FullGallery from "./fullGallery";

function FullActor() {
  return (
    <>
          <FullGallery name={actress}/>
    </>
  );
}

export default FullActor;
