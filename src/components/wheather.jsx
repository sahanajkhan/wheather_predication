import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";

const Weather = () => {

  const [weather, setWeather] = useState(null);

  const apiKey = "6e25a20457968d753cf514360799493c";

  const fetchWeather = async (city) => {

    try {

      const weatherUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const weatherRes = await axios.get(weatherUrl);
      const forecastRes = await axios.get(forecastUrl);

      setWeather({
        current: weatherRes.data,
        forecast: forecastRes.data.list.slice(0,5)
      });

    } catch (error) {

      alert("City not found");

    }

  };

  return (

    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-[420px] text-white">

      <h1 className="text-3xl font-bold text-center mb-6">
        Weather Forecast
      </h1>

      <SearchBar fetchWeather={fetchWeather} />

      {weather && (

        <div className="mt-6 text-center">

          <h2 className="text-2xl font-semibold">
            {weather.current.name}
          </h2>

          <p className="text-6xl font-bold mt-2">
            {weather.current.main.temp}°C
          </p>

          <p className="capitalize">
            {weather.current.weather[0].description}
          </p>

          <div className="flex justify-around mt-6">

            <div>
              <p className="text-lg">Humidity</p>
              <p className="font-bold">
                {weather.current.main.humidity}%
              </p>
            </div>

            <div>
              <p className="text-lg">Wind</p>
              <p className="font-bold">
                {weather.current.wind.speed} km/h
              </p>
            </div>

          </div>

          <Forecast data={weather.forecast} />

        </div>

      )}

    </div>

  );
};

export default Weather;