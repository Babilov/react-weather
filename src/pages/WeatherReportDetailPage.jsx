import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJsonAndStatus from "../api/getResponse";
import { getTimedWeatherInformation } from "../api/getWeatherInforamationArray";
import MyWeatherReportDetail from "../components/MyWeatherReportDetail";

const WeatherReportDetailPage = () => {
  const [detailedWeather, setDetailedWeather] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [myJson, setMyJson] = useState({});
  const [date, setDate] = useState(null);
  const { city, id } = useParams();
  useEffect(() => {
    (async () => {
      const [json, isFullFilled] = await getJsonAndStatus(city, id + 1);
      setMyJson(json);
      setLoading(false);
      if (isFullFilled && !isLoading) {
        const TimedWeatherInforamationArray = getTimedWeatherInformation(
          myJson,
          id
        );
        setDetailedWeather(TimedWeatherInforamationArray);
        setDate(myJson[0].date);
      }
    })();
  }, [isLoading]);

  return (
    <div>
      <MyWeatherReportDetail detailedWeather={detailedWeather} date={date} />
    </div>
  );
};

export default WeatherReportDetailPage;
