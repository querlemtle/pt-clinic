import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { mapIcon } from "../assets/images";

const [latitude, longitude] = [25.13572, 121.50646];

const brandIcon = new Icon({
  iconUrl: mapIcon,
  iconSize: [50, 50]
});

export default function Map() {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        detectRetina={true}
      />
      <Marker position={[latitude, longitude]} icon={brandIcon}>
        <Popup>源衡物理治療所</Popup>
      </Marker>
    </MapContainer>
  );
}
