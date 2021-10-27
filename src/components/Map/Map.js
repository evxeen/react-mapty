import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "./Map.css";

function Map({coords}) {
    return (
        <MapContainer center={coords} zoom={12} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            <Popup>
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    )
}

export default Map;
