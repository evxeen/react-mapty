import React, {useState} from "react";
import Map from "./components/Map/Map";
import {Sidebar} from "./components/Sideber/Sidebar";

function App() {

  const [coords, setCoords] = useState([]);

  const getPosition = async function() {
    if (navigator.geolocation) {
      const data = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })
      setCoords([data.coords.latitude, data.coords.longitude])
    }
  }

  getPosition();

 return (
    <div className="wrapper">
      <Sidebar />
      {coords.length > 0 ? <Map id="map" coords={coords}/> : null}
    </div>
  );
}

export default App;
