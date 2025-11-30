import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Coverage = () => {
  const position = [23.6850, 90.3563];
  return (
    <>
    <div>
        <h1 className="text-3xl font-bold text-center">We are in 64 District</h1>
    </div>
    <div>

    </div>
    <div className="border w-[80%] mx-auto h-[450px] my-10">
      <MapContainer 
      center={position} 
      zoom={7} 
      scrollWheelZoom={false}
      className="h-[450px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </>
  );
};

export default Coverage;
