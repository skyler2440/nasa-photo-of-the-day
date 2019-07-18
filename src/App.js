import React from "react";
import "./App.css";
// import PhotoOTD from "./components/PhotoOTD";
import PhotoOTDInfo from "./components/PhotoOTDInfo";
import { Header} from 'semantic-ui-react'
function App() {
  return (
    <div className="App">
<Header color="red" as="h1">Nasa's Photo/Video of the Day</Header>

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <PhotoOTDInfo />
    </div>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;
