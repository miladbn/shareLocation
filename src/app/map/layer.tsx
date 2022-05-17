import { FC } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import PinProps from "./pin";
import "./map.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { showPinEditor } from "../store/slices/pinEditorSlice";
const Layer: FC = () => {
  const dispatch = useAppDispatch();
  const pins = useAppSelector((state) => state.pins);
  useMapEvents({
    click(e) {
      dispatch(
        showPinEditor({
          id: 0,
          imageUrl: "",
          type: "",
          name: "",
          ...e.latlng,
        })
      );
    },
  });
  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pins.map((pin, index) => (
        <PinProps key={index} {...pin} />
      ))}
    </>
  );
};

export default Layer;
