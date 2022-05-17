import { useAppDispatch, useAppSelector } from "../store/hooks";
import { hidePinEditor } from "../store/slices/pinEditorSlice";
import { addPin, updatePin } from "../store/slices/pinsSlice";

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const pin = useAppSelector((state) => state.pinEditor.pin);
  console.log(pin);
  return (
    <div className="card-footer">
      <button
        className="btn-save"
        onClick={() => {
          if (pin.id === 0) {
            dispatch(addPin({ ...pin }));
          } else dispatch(updatePin({ ...pin }));
          dispatch(hidePinEditor());
        }}
      >
        Save
      </button>
      <button className="btn-cancel" onClick={() => dispatch(hidePinEditor())}>
        Cancel
      </button>
    </div>
  );
};

export default Footer;
