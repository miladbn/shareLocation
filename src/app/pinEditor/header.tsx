import { useAppDispatch } from "../store/hooks";
import { hidePinEditor } from "../store/slices/pinEditorSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="card-header">
      <div className="card-header-title">share location</div>
      <div
        className="card-header-close "
        onClick={() => dispatch(hidePinEditor())}
      >
        x
      </div>
    </div>
  );
};
export default Header;
