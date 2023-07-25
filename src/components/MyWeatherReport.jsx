import React from "react";
import cl from "../styles/MyWeatherReport.module.css";
import { useNavigate } from "react-router-dom";

const MyWeatherReport = ({ weatherObject }) => {
  const navigate = useNavigate();

  const redirect = (index) => (event) => {
    event.preventDefault();
    navigate(`/detail/${index}`);
  };

  return (
    <div className={cl.main_weather}>
      {weatherObject.length ? (
        weatherObject.map((weaher, index) => (
          <div onClick={redirect(index)} className={cl.div_weather} key={index}>
            <span>{weaher.date}</span>
            <span>{weaher.temperature}°C</span>
            <div className={cl.weather}>
              <img src={weaher.weather_icon} alt="weather" />
              {weaher.weather}
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MyWeatherReport;
