import { useEffect, useState } from "react";
import { API_KEY } from "../../consts/api-key";
import "./Sidebar.css";

const Sidebar = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`https://api.kierratys.info/materialtypes/?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(categories => setTypes(categories.results))
  }, [])

  return (
    <div className="container">
      <h2>Mitä haluat kierrättää?</h2>
      {types.map(type => (
        <div>{type.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;