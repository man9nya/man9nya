const CheckBox = (props) => {
  const { type, choose, selected, setSelected } = props;

  return (
    <div key={type.code} className="selector">
      <input
        type="checkbox"
        id={type.code}
        checked={selected?.includes(type.code)}
        onChange={() => choose(type.code)} // Измените это место
        onClick={() => choose(type.code)}
      />
      <label onClick={() => choose(type.code)}>
        {type.name}
      </label>
    </div>
  );
};

export default CheckBox;
