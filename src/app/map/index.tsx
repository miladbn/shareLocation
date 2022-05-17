import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pins from "./pins";
import LocationMarker from "./locationMarker";
import { mapProps } from "../types";
import "./map.scss";

const Map: FC<mapProps> = ({ handelOpenPopUp, setNewPosition, data }) => {
  console.log(data);
  Object.keys(data).map((key: any) => {
    console.log(data[key].lat);
  });
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Object.keys(data).map((marker) => (
        <Pins marker={marker} data={data} />
      ))}
      <LocationMarker
        handelOpenPopUp={handelOpenPopUp}
        setNewPosition={setNewPosition}
      />
    </MapContainer>
  );
};

export default Map;
