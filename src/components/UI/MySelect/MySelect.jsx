import React from "react";
import cl from "./MySelect.module.css"
import getWeatherInforamationArray from "../../../api/getWeatherInforamationArray";
import getJsonAndStatus from "../../../api/getResponce";
import changeSelectClass from "../../../utils/changeClasses";



const MySelect = ({ setDays, setWeather, city }) => {

    const changeSelect = async (event) => {
        setDays(event.target.value)
        changeSelectClass(event.target.classList);

        if (city) {

            const [myJson, isResponceOk] = await getJsonAndStatus(city, event.target.value);

            if (isResponceOk) {

                const weatherInforamationArray = getWeatherInforamationArray(myJson);
                setWeather(weatherInforamationArray);

            }
        }
    }

    return (
        <div className={cl.buttons_group}>
            <button className={`first ${cl.btn} ${cl.selected}`} href="#" value="1" onClick={changeSelect}> Сегодня </button>
            <button className={`second ${cl.btn}`} href="#" value="3" onClick={changeSelect}> 3 дня </button>
            <button className={`third ${cl.btn}`} href="#" value="7" onClick={changeSelect}> 7 дней</button>
        </div>
    )
}

export default MySelect;