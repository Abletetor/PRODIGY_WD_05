/* eslint-disable react/prop-types */
import './WeatherCard.css';
import { FaTemperatureHigh, FaWind, FaSun, FaMoon, FaWater, FaMapMarkerAlt } from 'react-icons/fa';

const WeatherCard = ({ data }) => {
   const { name, main, weather, wind, sys } = data;
   const temperature = Math.round(main.temp);
   const weatherCondition = weather[0].description;
   const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
   const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

   return (
      <div className="weather-card">
         <h2 className="city-name"><FaMapMarkerAlt /> { name }</h2>
         <div className="weather-info">
            <div className="temperature">
               <FaTemperatureHigh /> { temperature }°C
            </div>
            <div className="condition">{ weatherCondition }</div>
            <div className="details">
               <div><FaWind /> Wind: { wind.speed } m/s</div>
               <div><FaWater /> Humidity: { main.humidity }%</div>
               <div><FaSun /> Sunrise: { sunrise }</div>
               <div><FaMoon /> Sunset: { sunset }</div>
            </div>
         </div>
      </div>
   );
};

export default WeatherCard;
