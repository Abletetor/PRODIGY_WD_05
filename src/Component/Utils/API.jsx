import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_ID;

export const getWeatherByLocation = (city) => {
   return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
   );
};

export const getWeatherByCoordinates = (lat, lon) => {
   return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
   );
};
