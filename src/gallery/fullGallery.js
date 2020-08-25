import React, { useEffect } from "react";
import SecondaryHeader from "../secondaryHeader/secondaryHeader";
import Gallery from "react-photo-gallery";
import LazyLoad from "react-lazyload";
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import actor from "../data/actors.json";
import actress from "../data/actress.json";
import movies from "../data/movies.json";

function FullGallery() {
  const { type, name } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    if (name === "all") {
      setData(type === "Actor" ? actor : type === "Actress" ? actress : movies);
    } else {
      const setdata =
        type === "Actor" ? actor : type === "Actress" ? actress : movies;
      actor && setData(setdata.filter((value) => value.title === name));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {SecondaryHeader(type)}
      {data.map((value, index) => {
        const photos1 = value.images.map((image) => ({
          src: image,
          width: 4,
          height: 4,
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
