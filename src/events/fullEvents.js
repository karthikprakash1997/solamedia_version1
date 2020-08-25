import React, { useEffect } from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import { useParams } from "react-router-dom";
import events from "../data/events.json";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";
import Gallery from "react-photo-gallery";

function FullGallery() {
  const { name } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    if (name === "all") {
      setData(events);
    } else {
      setData(events.filter((value) => value.title === name));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {SecondaryHeader("Events")}
      {data.map((value, index) => {
        const photos1 = value.images.map((image) => ({
          src: image,
        }));
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
              <Gallery photos={photos1} />
            </LazyLoad>
          </div>
        );
      })}
      }
    </>
  );
}

export default FullGallery;
