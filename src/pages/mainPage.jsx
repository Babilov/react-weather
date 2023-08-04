import React, { useState } from "react";
import Loader from "../components/UI/Loader/Loader";
import MyInput from "../components/UI/MyInput/MyInput";
import MyWeatherReport from "../components/MyWeatherReport";
import MySelect from "../components/UI/MySelect/MySelect";
import "../styles/App.css";

const MainPage = () => {
  const [days, setDays] = useState("1");
  const [city, setCity] = useState("");
  const [problem, setProblem] = useState("Введите город и выберите период");
  const [weather, setWeather] = useState([]);
  return (
    <div className="App">
      <MyInput
        setWeather={setWeather}
        days={days}
        city={city}
        setCity={setCity}
        setProblem={setProblem}
      />
      <MySelect
        setDays={setDays}
        setWeather={setWeather}
        city={city}
        days={days}
      />
      {problem !== "" ? (
        <Loader problem={problem} />
      ) : (
        <MyWeatherReport weatherObject={weather} days={days} city={city} />
      )}
    </div>
  );
};

export default MainPage;
