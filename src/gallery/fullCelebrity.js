import React, { useEffect } from "react";
import celebrity from "../data/celebrity.json";
import FullGallery from "./fullGallery";
import { useParams } from "react-router-dom";

function FullCelebrity() {
  const { name } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
      setData(celebrity.filter((value) => value.title === name));
    // eslint-disable-next-line
  }, []);
  return (
    <>
          <FullGallery name={data}/>
    </>
  );
}

export default FullCelebrity;
