import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoOTD from "./PhotoOTD";


export default function PhotoOTDInfo(){
const [data, setData] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=CKlkJ0IAyI7ZRrBfKyK99ck1nNXwWE0wFCsQk1SO`)
      .then(response => {
        // const doggos = response.data.message;
        // console.log("api data:", response);
        const nasaData = response.data;
        // console.log (title)
        // KEY PART, SAVE TO STATE:
        setData(nasaData)
        console.log(nasaData)
        ;
      });
  }, []);


return(
<div className="data">

<PhotoOTD title={data.title} date={data.date} vidUrl={data.url} explanation={data.explanation}/>


</div>
   
)



}