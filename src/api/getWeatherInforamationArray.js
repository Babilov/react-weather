const getWeatherInforamationArray = (myJson) => {

    const weatherInforamationArray = myJson.forecast.forecastday.map(weather_obj => ({
        "date": weather_obj.date,
        "temperature": weather_obj.day.avgtemp_c,
        "weather": weather_obj.day.condition.text,
        "weather_icon": weather_obj.day.condition.icon,
    }));
    return weatherInforamationArray;
}

export default getWeatherInforamationArray;