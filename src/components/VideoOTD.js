import React from "react";
import { Header } from "semantic-ui-react";
// import Iframe from "react-iframe"
import "../App.css";
export default function PhotoOTD({ date, explanation, title, vidUrl }) {
  return (
    <div className="photoOTD">
      <Header color="red" as="h1" className="header">
        Nasa's Photo of the Day
      </Header>
      <Header as="h2" color="blue">
        {title || "LOADING..."}
      </Header>
      <h4 className="date">{date}</h4>
      <iframe
        url={vidUrl}
        src={vidUrl}
        title={title}
        style={{ height: "500px", width: "900px" }}
      />

      <p className="explain">{explanation}</p>
    </div>
  );
}
