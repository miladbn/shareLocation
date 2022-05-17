import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface mapLocationProps {
  lat: number;
  lng: number;
}

const mapLocation: FC<mapLocationProps> = ({ lat, lng }) => {
  return (
    <div className="map-loaction">
      <MapContainer center={[lat, lng]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default mapLocation;
