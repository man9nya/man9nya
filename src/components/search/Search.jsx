import { useEffect, useState } from "react";
import { API_KEY } from "../../consts/api-key";
import "./Search.css";

function Search() {
  const [searchItem, setSearchItem] = useState('');
  const [municipalities, setMunicipalities] = useState([]);
  const [filteredMunicipalities, setFilteredMunicipalities] = useState([]);

  useEffect(() => {
    fetch(`https://api.kierratys.info/collectionspots/?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {

      const spots = data.results
      const munisipalitiesData = spots.filter(item => item.category === 'municipality');
      setMunicipalities(munisipalitiesData);
    })
    .catch(error => {
      console.error('Virhe', error);
    });
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredMunicipalities = municipalities.filter(municipality =>
      municipality.name.toLowercase().includes(searchTerm.toLowercase())
      );
      setFilteredMunicipalities(filteredMunicipalities)
      console.log(filteredMunicipalities);
  };

  return(
    <div>
    <input
      type="text"
      value={searchItem}
      onChange={e => handleInputChange(e)}
      placeholder='type on search'
      />
      <ul>
        {filteredMunicipalities?.map(municipality => (
          <li key={municipality.id}>{municipality.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

