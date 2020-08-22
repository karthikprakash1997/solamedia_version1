import React, { useEffect } from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import Gallery from "react-photo-gallery";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";

export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

function FullGallery() {
  const { type, name } = useParams();

  useEffect(() => {
    console.log(type, name);
  }, [type, name]);

  return (
    <>
      {SecondaryHeader(type)}
      <div>
        {name !== "all" && (
          <div
            className="section-title"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <h4>{name} </h4>
          </div>
        )}
        <LazyLoad
          placeholder={
            <div className="section-title">
              <CircularProgress color="secondary" size={100} />
            </div>
          }
          once={true}
          debounce={500}
        >
          <Gallery photos={photos} />
        </LazyLoad>
      </div>
    </>
  );
}

export default FullGallery;
