import React, { useState } from "react";
import MyInput from "./components/UI/MyInput/MyInput";
import MyWeatherReport from "./components/MyWeatherReport";
import MySelect from "./components/UI/MySelect/MySelect";
import "./styles/App.css"
import Loader from "./components/UI/Loader/Loader";
import { useNavigate } from "react-router-dom";

function App() {

  const [weather, setWeather] = useState([]);
  const [days, setDays] = useState('1');
  const [city, setCity] = useState('');
  const [problem, setProblem] = useState('Введите город и выберите период');
  const [path, setPath] = useState('/')

  return (

    <div className="App">
      <MyInput setWeather={setWeather} days={days} setCity={setCity} setProblem={setProblem} />
      <MySelect setDays={setDays} setWeather={setWeather} city={city} />
      {(problem !== '')
        ?<Loader problem={problem} />
        :<MyWeatherReport weatherObject={weather} days={days} setPath={setPath} /> 
      }
      
    </div>
  );
}

export default App;
