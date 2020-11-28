import React, { useEffect } from "react";
import model from "../data/model.json";
import FullGallery from "./fullGallery";
import { useParams } from "react-router-dom";
function FullModal() {
  const { name } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
      setData(model.filter((value) => value.title === name));
    // eslint-disable-next-line
  }, []);
  console.log(data,"data");
  return (
    <>
          <FullGallery name={data}/>
    </>
  );
}

export default FullModal;
