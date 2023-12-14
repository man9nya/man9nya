import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export default App;
