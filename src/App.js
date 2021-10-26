import React from "react";
import Map from "./components/Map/Map";
import {Sidebar} from "./components/Sideber/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Map id="map" />
    </div>
  );
}

export default App;
