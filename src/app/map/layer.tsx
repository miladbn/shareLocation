import { FC } from "react";
import { TileLayer, useMapEvents } from "react-leaflet";
import PinProps from "./pin";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { showPinEditor } from "../store/slices/pinEditorSlice";
import "./map.scss";

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
  console.log(pins);
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
