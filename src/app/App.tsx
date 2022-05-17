import { useState } from "react";
import "./app.scss";
import Map from "./map";
import PopUp from "./popUp";
import { LatLngLiteral } from "leaflet";
import { markers } from "./types";

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newPosition, setNewPosition] = useState<LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [data, setData] = useState<markers>([]);
  console.log(typeof data);
  return (
    <div className="main-part">
      <Map
        handelOpenPopUp={() => setShowPopup(true)}
        setNewPosition={setNewPosition}
        data={data}
      />
      {showPopup && (
        <PopUp
          setShowPopup={setShowPopup}
          newPosition={newPosition}
          setData={setData}
          data={data}
        />
      )}
    </div>
  );
}

export default App;
