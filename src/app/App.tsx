import "./app.scss";
import Map from "./map";
import PinEditor from "./pinEditor";

function App() {
  return (
    <div className="main-part">
      <Map />
      <PinEditor />
    </div>
  );
}

export default App;
