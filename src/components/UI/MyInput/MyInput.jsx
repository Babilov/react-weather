import React from "react";
import cl from "./MyInput.module.css";
import { debounce } from "lodash";
import getJsonAndStatus from "../../../api/getResponse";
import getWeatherInforamationArray from "../../../api/getWeatherInforamationArray";
import useDebouncedEffect from "../../../hooks/useDebouncedEffect";

const MyInput = ({ setWeather, days, setCity, setProblem, city }) => {
  const changeInput = async (event) => {
    console.log(event);
    setCity(event.target.value);

    if (days) {
      const [myJson, isFullFilled] = await getJsonAndStatus(
        event.target.value,
        days
      );

      if (isFullFilled || event.target.value === "") {
        if (event.target.value === "") {
          setProblem("Введите город");
        } else {
          const weatherInforamationArray = getWeatherInforamationArray(myJson);
          setProblem("");
          setWeather(weatherInforamationArray);
        }
      } else {
        setProblem("Такого города не существует");
      }
    }
  };

  const debounceChangeInput1 = debounce(changeInput, 1000);
  const debounceChangeInput = useDebouncedEffect(changeInput, 1000, [
    city,
    days,
  ]);

  return (
    <div>
      <input
        onChange={debounceChangeInput1}
        className={cl.MyInput}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default MyInput;
