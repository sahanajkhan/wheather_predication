import React from "react";

const Forecast = ({ data }) => {

  return (

    <div className="mt-8">

      <h3 className="text-xl mb-4 text-center">
        Forecast
      </h3>

      <div className="grid grid-cols-5 gap-2">

        {data.map((item, index) => (

          <div
            key={index}
            className="bg-white/20 p-3 rounded-lg text-center"
          >

            <p className="text-sm">
              {new Date(item.dt_txt).getHours()}:00
            </p>

            <p className="font-bold">
              {Math.round(item.main.temp)}°C
            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Forecast;