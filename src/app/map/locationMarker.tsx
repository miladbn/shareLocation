import { FC, useState } from "react";
import { useMapEvents } from "react-leaflet";
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
  return <></>;
};

export default LocationMarker;
