import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngLiteral } from "leaflet";
import { mapLocationProps } from "../types";

const MapLocation: FC<mapLocationProps> = ({
  newPosition,
  name,
  type,
  imgSrc,
}) => {
  return (
    <div className="map-loaction">
      <MapContainer center={[newPosition.lat, newPosition.lng]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[newPosition.lat, newPosition.lng]}>
          <Popup>
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLocation;
