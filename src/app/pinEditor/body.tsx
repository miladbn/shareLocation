import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PinEditorProps } from "../types";
import { addPin, updatePin } from "../store/slices/pinsSlice";
import { updatePinEditor } from "../store/slices/pinEditorSlice";
import MapLocation from "./mapLocation";

const Body: React.FC = () => {
  const pin = useAppSelector((state) => state.pinEditor.pin);
  const { id, name, type, lat, lng, imageUrl } = pin;
  const dispatch = useAppDispatch();
  const action = id === 0 ? addPin : updatePin;
  return (
    <div className="card-body">
      <div className="row">
        <label htmlFor="">Location Name :</label>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) =>
            dispatch(updatePinEditor({ ...pin, name: e.target.value }))
          }
        />
      </div>
      <div className="row">
        <label htmlFor="">Location on Map :</label>
        <MapLocation lat={lat} lng={lng} />
      </div>
      <div className="row">
        <label htmlFor="">Location Type :</label>
        <select
          value={type}
          onChange={(e) =>
            dispatch(updatePinEditor({ ...pin, type: e.target.value }))
          }
        >
          <option>Home</option>
          <option>Work</option>
          <option>Other</option>
        </select>
      </div>
      <div className="row mt-20 mb-20">
        <label htmlFor="">Logo :</label>
        <label id="largeFile">
          <input
            type="file"
            onChange={(e) => {
              console.log(typeof e.target.files);
              const [file]: any = e.target.files;
              dispatch(
                updatePinEditor({ ...pin, imageUrl: URL.createObjectURL(file) })
              );
            }}
          />
        </label>
        {imageUrl && <img src={imageUrl} className="sample-image" />}
      </div>
    </div>
  );
};

export default Body;
