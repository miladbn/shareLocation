import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pins from "./pins";
import LocationMarker from "./locationMarker";
import { mapProps } from "../types";

const Map: FC<mapProps> = ({ handelOpenPopUp, setNewPosition, data }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Object.keys(data).map((marker) => (
        <Pins marker={marker} />
      ))}
      <LocationMarker
        handelOpenPopUp={handelOpenPopUp}
        setNewPosition={setNewPosition}
      />
    </MapContainer>
  );
};

export default Map;
