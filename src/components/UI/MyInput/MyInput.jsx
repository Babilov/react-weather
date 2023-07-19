import React from "react";
import cl from "./MyInput.module.css"
import { debounce } from "lodash"
import getJsonAndStatus from "../../../api/getResponce";
import getWeatherInforamationArray from "../../../api/getWeatherInforamationArray";

const MyInput = ({ setWeather, days, setCity, setProblem }) => {
    const changeInput = async (event) => {
        
        setCity(event.target.value)
        
        if (days) {
            const [myJson, isResponceOk] = await getJsonAndStatus(event.target.value, days)

            if (isResponceOk || event.target.value === '') {
                if (event.target.value === '') {
                    setProblem('Введите город');
                }
                else {
                    const weatherInforamationArray = getWeatherInforamationArray(myJson);
                    setProblem('')
                    setWeather(weatherInforamationArray);
                }
            }
            else {
                setProblem('Такого города не существует');
            }
        }
    }

    const debounceChangeInput = debounce(changeInput, 1000);

    return (
        <div >
            <input onChange={debounceChangeInput} className={cl.MyInput} type="text" placeholder="Поиск..." />
        </div>
    )
}

export default MyInput;