import React, { useState } from "react";
import getWeatherInforamationArray from "../../../api/getWeatherInforamationArray";
import getJsonAndStatus from "../../../api/getResponse";
import changeSelectClass from "../../../utils/changeClasses";
import MyButtonGroup from "./MyButtonsGroup";

const MySelect = ({ setDays, setWeather, city }) => {
  const [activeButton, setActiveButton] = useState([true, false, false]);

  const handleChange = changeSelectClass(
    setDays,
    city,
    getJsonAndStatus,
    getWeatherInforamationArray,
    setWeather,
    setActiveButton
  );

  return (
    <MyButtonGroup activeButton={activeButton} handleChange={handleChange} />
  );
};

export default MySelect;
