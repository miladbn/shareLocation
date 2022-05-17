import { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { pinsProps } from "../types";

const Pins: FC<pinsProps> = ({ marker, data }) => {
  return (
    <Marker position={{ lat: data[marker].lat, lng: data[marker].lng }}>
      <Popup>
        <img src={data[marker].imgSrc} className="pin-img" />

        <p>name : {data[marker].name}</p>
        <p>type : {data[marker].type}</p>

        <button className="edit-btn">Edit</button>
      </Popup>
    </Marker>
  );
};

export default Pins;
