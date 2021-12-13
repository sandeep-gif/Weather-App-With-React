// import axios from 'axios';
// const API_KEY='fb9c49c4cb6f3e380dc04e0945b43abd';
// function getCurrentWeather(location)
// {
// return axios.get(
//     `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
// );
// }
// export {getCurrentWeather}
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnLocation = (location) => {
  return apiClient
    .get(
      `/weather?q=${location}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=imperial`
    )
    .then((res) => res.data);
};

const getForecast= (lat, lon) => {
  return apiClient
    .get(
      `/onecall?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=imperial`
    )
    .then((res) => res.data);
};

export  { getWeatherBasedOnLocation, getForecast };
