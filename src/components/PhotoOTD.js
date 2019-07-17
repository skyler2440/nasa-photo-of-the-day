import React from "react";

export default function PhotoOTD ({ date, explanation, title, vidUrl}) {

    return (
        <div className="photoOTD">
            <h1 className="title">{title || "Does not Work"}</h1>
            <h4 className="date">{date || "Does not Work"}</h4>
            <iframe src={vidUrl} title={title} style={{ height: "500px", width: "900px"}} />
           
            <p className="explain">{explanation || "Does not Work"}</p>
        </div>
    )




}