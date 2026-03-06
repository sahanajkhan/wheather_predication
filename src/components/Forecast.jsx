const Forecast = ({ data }) => {

  return (

    <div className="forecast">

      {data.map((item,index)=>{

        return(

          <div className="forecast-card" key={index}>

            <p>
              {new Date(item.dt_txt).getHours()}:00
            </p>

            <h3>
              {Math.round(item.main.temp)}°C
            </h3>

          </div>

        )

      })}

    </div>

  );

};

export default Forecast;
