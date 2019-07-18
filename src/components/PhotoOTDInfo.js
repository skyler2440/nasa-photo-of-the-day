import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoOTD from "./PhotoOTD";
import VideoOTD from "./VideoOTD";
export default function PhotoOTDInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CKlkJ0IAyI7ZRrBfKyK99ck1nNXwWE0wFCsQk1SO`
      )
      .then(response => {
        const nasaData = response.data;
        setData(nasaData);
      });
  }, []);
  var photoVideo;
  if (data.media_type === "image") {
    photoVideo = (
      <PhotoOTD
        title={data.title}
        date={data.date}
        vidUrl={data.url}
        explanation={data.explanation}
        mediaType={data.media_type}
      fluid />
    );
  } else {
    photoVideo = (
      <VideoOTD
        title={data.title}
        date={data.date}
        vidUrl={data.url}
        explanation={data.explanation}
        mediaType={data.media_type}
      />
    );
  }
  return <div className="data">{photoVideo}</div>;
}
