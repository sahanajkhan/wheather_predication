import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ fetchWeather }) => {

  const [city, setCity] = useState("");

  const handleSearch = () => {

    if (!city) return;

    fetchWeather(city);

  };

  return (

    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Enter city..."
        className="flex-1 p-3 rounded-lg text-black"
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-black px-4 rounded-lg"
      >

        <FaSearch />

      </button>

    </div>

  );

};

export default SearchBar;