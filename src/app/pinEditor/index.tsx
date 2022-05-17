import React from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import "./popUp.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { hidePinEditor } from "../store/slices/pinEditorSlice";

const PinEditor: React.FC = () => {
  const show = useAppSelector((state) => state.pinEditor.show);
  const dispatch = useAppDispatch();
  return show ? (
    <div className="popup">
      <div className="overlay" onClick={() => dispatch(hidePinEditor())}></div>
      <div className="card">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PinEditor;
