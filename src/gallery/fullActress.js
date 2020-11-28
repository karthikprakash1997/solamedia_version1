import React from "react";
import actor from "../data/actress.json";
import FullGallery from "./fullGallery";

function FullActress() {
  return (
    <>
          <FullGallery name={actor}/>
    </>
  );
}

export default FullActress;
