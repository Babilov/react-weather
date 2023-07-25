const changeSelectClass = (
  setDays,
  city,
  getJsonAndStatus,
  getWeatherInforamationArray,
  setWeather,
  setActiveButton
) => {
  const handleClick = (event) => {
    if (event.target.value === "1") setActiveButton([true, false, false]);
    else if (event.target.value === "3") setActiveButton([false, true, false]);
    else setActiveButton([false, false, true]);
  };

  const changeSelect = async (event) => {
    setDays(event.target.value);
    handleClick(event);

    if (city) {
      const [myJson, isFullFilled] = await getJsonAndStatus(
        city,
        event.target.value
      );

      if (isFullFilled) {
        const weatherInforamationArray = getWeatherInforamationArray(myJson);
        setWeather(weatherInforamationArray);
      }
    }
  };
  return changeSelect;
};

export default changeSelectClass;
