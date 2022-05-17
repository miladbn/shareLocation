import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import MapLocation from "./mapLocation";
import { popUpProps } from "../types";
import "./popUp.scss";

const PopUp: React.FC<popUpProps> = ({
  setShowPopup,
  newPosition,
  setData,
  data,
}) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");
  return (
    <div className="popup">
      <div className="overlay" onClick={() => setShowPopup(false)}></div>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">share location</div>
          <div
            className="card-header-close "
            onClick={() => setShowPopup(false)}
          >
            x
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <label htmlFor="">Location Name :</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="">Location on Map :</label>
            <MapLocation
              newPosition={newPosition}
              name={name}
              type={type}
              imgSrc={imgSrc}
            />
          </div>
          <div className="row">
            <label htmlFor="">Location Type :</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
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
                  setImgSrc(URL.createObjectURL(file));
                }}
              />
            </label>
            {imgSrc && <img src={imgSrc} className="sample-image" />}
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn-save"
            onClick={() => {
              setData((prevData: any) => [
                ...prevData,
                {
                  name,
                  type,
                  imgSrc,
                  lat: newPosition.lat,
                  lng: newPosition.lng,
                  // id: uuidv4(),
                },
              ]);
              setShowPopup(false);
            }}
          >
            Save
          </button>
          <button className="btn-cancel" onClick={() => setShowPopup(false)}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
