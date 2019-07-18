// import React from "react";
// import { Header } from "semantic-ui-react";
// // import Iframe from "react-iframe"
// import "../App.css";
// export default function PhotoOTD({ date, explanation, title, vidUrl }) {
//   return (
//     <div className="photoOTD">
//       <Header color="red" as="h1" className="header">
//         Nasa's Photo of the Day
//       </Header>
//       <Header as="h2" color="blue">
//         {title || "LOADING..."}
//       </Header>
//       <h4 className="date">{date}</h4>
//       <img src={vidUrl} alt="nasa" />
//       <p className="explain">{explanation}</p>
//     </div>
//   );
// }
import React from 'react'
import { Grid, Image, Header} from 'semantic-ui-react'
import "../App.css"

const PhotoOTD = ({ date, explanation, title, vidUrl }) => (
  
  <Grid>
    <Grid.Column width={4}>
    {/* <Header color="red" as="h1" className="left">Photo Title:</Header> */}
<Header color="red" as="h1">Photo Title: {' '}{title || "LOADING..."}</Header>
    <Grid>
    <Grid.Column width={16}>
    <Header color="blue" as="h3">{date}</Header>
    </Grid.Column>
    </Grid>
    </Grid.Column>
    <Grid.Column width={8}>
    <Image src={vidUrl} alt="Nasa" fluid />
   
    </Grid.Column>
    <Grid.Column width={4}>
    <Header color="red" as="h2" className="left">Nasa's Explanation of the Photo:</Header>
      <p style={{textAlign: "left"}}>{explanation}</p>
    </Grid.Column>
  </Grid>
)

export default PhotoOTD