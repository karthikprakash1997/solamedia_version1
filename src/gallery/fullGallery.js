import React from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import Gallery from "react-photo-gallery";
import { photos } from "./gallery";

function FullGallery() {
  return (
    <>
      {SecondaryHeader("Gallery")}
      <div>
        <Gallery photos={photos} />
      </div>
    </>
  );
}

export default FullGallery;
