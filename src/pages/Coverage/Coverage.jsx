import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null)
  //   console.log(serviceCenters)

  const handleSearch = (e) =>{
        e.preventDefault()
        const location = e.target.location.value
        const district = serviceCenters.find(c=> c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const coord = [district.latitude, district.longitude]
            mapRef.current.flyTo(coord, 14)
        }
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center">
          We are in 64 District
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSearch}>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input type="search" placeholder="search" name="location" />
              </label>
            </div>
            <button className="btn btn-neutral join-item">Search</button>
          </div>
        </form>
      </div>
      <div className="border w-[80%] mx-auto h-[550px] my-10">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[550px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></TileLayer>
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Cover Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Coverage;
