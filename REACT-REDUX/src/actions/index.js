import axios from 'axios';

const API_KEY = '65db34b845202021b0fbfc097ae98122';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}