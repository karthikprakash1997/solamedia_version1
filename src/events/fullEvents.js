import React, { useEffect } from "react";
import events from "../data/events.json";
import FullGallery from "../gallery/fullGallery";
import { useParams } from "react-router-dom";

function FullEvents() {
  const { name } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
      setData(events.filter((value) => value.title === name));
    // eslint-disable-next-line
  }, []);
  return (
    <>
          <FullGallery name={data}/>
    </>
  );
}

export default FullEvents;
