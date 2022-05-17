import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { pinsProps } from "../types";

const Pins: FC<pinsProps> = ({ marker }) => {
  return (
    <Marker position={{ lat: marker.lat, lng: marker.lng }}>
      <Popup>
        {marker.name}
        <br />
        {marker.type}
        <img src={marker.imgSrc} />
        <button className="edit-btn">Edit</button>
      </Popup>
    </Marker>
  );
};

export default Pins;
