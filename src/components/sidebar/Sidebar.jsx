import { useEffect, useState } from "react";
import { API_KEY } from "../../consts/api-key";
import "./Sidebar.css";
import CheckBox from "./CheckBox";

const Sidebar = (props) => {
  const { result, selected, setSelected } = props;

  const [types, setTypes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const choose = (code) => {
    const updatedSelected = [...selected];
    const index = updatedSelected.indexOf(code);

    if (index === -1) {
      updatedSelected.push(code);
    } else {
      updatedSelected.splice(index, 1);
    }

    setSelected([...updatedSelected]);
  };

  useEffect(() => {
    fetch(`https://api.kierratys.info/materialtypes/?api_key=${API_KEY}`)
      .then((data) => data.json())
      .then((categories) => setTypes(categories.results));
  }, [selected]);

  const changeHandler = () => {
    setSelectAll((prev) => {
      const updatedSelected = prev ? [] : types.map((type) => type.code);
      setSelected(updatedSelected);
      return !prev;
    });
  };

  return (
    <div className="sideBar">
      <h2>Mitä haluat kierrättää?</h2>

      <div className="actions">
        <button onClick={changeHandler}>
          {selectAll ? "De-select all" : "Select all"}
        </button>
      </div>

      {types.map((type) => (
        <CheckBox
          key={type.code}
          type={type}
          choose={choose}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Sidebar;