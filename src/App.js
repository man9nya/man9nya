import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Spot from "./components/spot/Spot";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map />} />
      <Route path="/spot/:id" element={<Spot />} />
    </Routes>
  );
};

export default App;
