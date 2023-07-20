import { API_KEY, API_URL } from "../vars/env_variables"

const getJsonAndStatus = async (city, days) => {
    
    const api_request = `${API_URL}key=${API_KEY}&q=${city}&days=${days}&aqi=no`
    const response = await fetch(api_request);
    const myJson = await response.json();
    const isResponceOk = response.ok;

    return ([myJson, isResponceOk]);
}


export default getJsonAndStatus;