import { API_KEY, API_URL } from "../vars/env_variables";

const getJsonAndStatus = async (city, days) => {
  const api_request = `${API_URL}key=${API_KEY}&q=${city}&days=${days}&aqi=no`;
  const response = await fetch(api_request);
  const myJson = await response.json();
  const isFullFilled = response.ok;
  if (isFullFilled) return [myJson.forecast.forecastday, isFullFilled];
  else return [isFullFilled];
};

export default getJsonAndStatus;
