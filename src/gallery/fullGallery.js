import React from "react";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";

function FullGallery({ name }) {

  return (
    <>
      {name.map((value, index) => {
        return (
          <div>
            <div
              className="section-title"
              style={{ marginTop: 20, marginBottom: 20 }}
              key={index}
            >
              <h4>{value.title} </h4>
            </div>
            <LazyLoad
              placeholder={
                <div className="section-title">
                  <CircularProgress color="secondary" size={100} />
                </div>
              }
              once={true}
              debounce={500}
            >
              {
                value.images.map((image) => (
                  <img src={image}
                    style={{
                      maxHeight: 500,
                      objectFit: "contain",
                      padding: 5
                    }}
                    alt="gallery">
                  </img>
                ))
              }
            </LazyLoad>
          </div>
        );
      })}

    </>
  );
}

export default FullGallery;
