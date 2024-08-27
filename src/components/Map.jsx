"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const [latitude, longitude] = [25.13572, 121.50646];

const customIcon = new Icon({
  iconUrl: "/icons/map-icon.svg",
  iconSize: [50, 50]
});

export default function Map({ zoom }) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        detectRetina={true}
      />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>源衡物理治療所</Popup>
      </Marker>
    </MapContainer>
  );
}
