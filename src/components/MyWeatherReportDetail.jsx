import React from "react";
import cl from "../styles/MyDetailedWeatherReport.module.css";

const MyWeatherReportDetail = ({ detailedWeather, date }) => {
  return (
    <div className={cl.main}>
      <h2>Дата: {date}</h2>
      {detailedWeather.map((weather, index) => (
        <div className={cl.weather_div} key={index}>
          <div className={cl.time_div}>{weather.time.split(" ")[1]}</div>

          <div>{weather.temp_c}°C</div>
          <div className={cl.img_div}>
            <img src={weather.condition.icon} />
            <div> {weather.condition.text} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyWeatherReportDetail;
