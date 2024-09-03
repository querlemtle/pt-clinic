import { useEffect, useRef } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const [latitude, longitude] = [25.13572, 121.50646];

const customIcon = new L.Icon({
  iconUrl: "/icons/map-icon.svg",
  iconSize: [50, 50]
});

export default function Map() {
  const mapContainer = useRef();

  useEffect(() => {
    const map = L.map(mapContainer.current, {
      attributionControl: true
    }).setView([latitude, longitude], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1,
      detectRetina: true
    }).addTo(map);

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup("源衡物理治療所").openPopup;
      
    // 卸載地圖，避免重新整理頁面時報錯：map container is already initialized
    return () => map.remove();
  }, []);

  return <div ref={(el) => (mapContainer.current = el)}></div>;
}
