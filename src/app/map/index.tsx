import { FC } from "react";
import { MapContainer } from "react-leaflet";
import "./map.scss";
import Layer from "./layer";

const Map: FC = (props) => (
  <MapContainer center={[51.505, -0.09]} zoom={13}>
    <Layer />
  </MapContainer>
);

export default Map;
