import { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { Pin as PinProps } from "../types";
import { useAppDispatch } from "../store/hooks";
import { showPinEditor } from "../store/slices/pinEditorSlice";

const Pin: FC<PinProps> = ({ id, lng, lat, name, type, imageUrl }) => {
  const dispatch = useAppDispatch();
  return (
    <Marker position={{ lat, lng }}>
      <Popup>
        <img src={imageUrl} className="pin-img" />
        <p>Name : {name}</p>
        <p>Type : {type}</p>
        <button
          className="edit-btn"
          onClick={() =>
            dispatch(
              showPinEditor({
                id,
                imageUrl,
                type,
                name,
                lng,
                lat,
              })
            )
          }
        >
          Edit
        </button>
      </Popup>
    </Marker>
  );
};

export default Pin;
