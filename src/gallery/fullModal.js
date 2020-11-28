import React from "react";
import actor from "../data/model.json";
import FullGallery from "./fullGallery";

function FullModal() {
  return (
    <>
          <FullGallery name={actor}/>
    </>
  );
}

export default FullModal;
