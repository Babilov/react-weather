import React, { useState } from "react";
import MyInput from "./components/UI/MyInput/MyInput";
import MyWeatherReport from "./components/MyWeatherReport";
import MySelect from "./components/UI/MySelect/MySelect";
import "./styles/App.css";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [weather, setWeather] = useState([]);
  const [days, setDays] = useState("1");
  const [city, setCity] = useState("");
  const [problem, setProblem] = useState("Введите город и выберите период");

  return (
    <div className="App">
      <MyInput
        setWeather={setWeather}
        days={days}
        city={city}
        setCity={setCity}
        setProblem={setProblem}
      />
      <MySelect setDays={setDays} setWeather={setWeather} city={city} />
      {problem !== "" ? (
        <Loader problem={problem} />
      ) : (
        <MyWeatherReport weatherObject={weather} days={days} />
      )}
    </div>
  );
}

export default App;
