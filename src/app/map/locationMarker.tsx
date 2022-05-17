import { FC, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import { locationMarkerProps } from "../types";

const LocationMarker: FC<locationMarkerProps> = ({
  handelOpenPopUp,
  setNewPosition,
}) => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      handelOpenPopUp();
      setNewPosition(e.latlng);
    },
  });
  return position === null ? null : (
    <Marker position={{ lat: position.lat, lng: position.lng }}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
