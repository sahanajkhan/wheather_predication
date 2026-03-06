import { useState } from "react";

const SearchBar = ({ fetchWeather }) => {

  const [city, setCity] = useState("");

  const handleSearch = () => {
    if(!city) return;
    fetchWeather(city);
  };

  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Enter city..."
        onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>

  );
};

export default SearchBar;