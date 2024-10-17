import { useState } from 'react';
import PropTypes from 'prop-types';
import './WeatherSearch.css';

const WeatherSearch = ({ fetchWeatherByCity }) => {
   const [city, setCity] = useState('');

   const handleSearch = () => {
      if (city.trim()) {
         fetchWeatherByCity(city);
      }
   };

   return (
      <div className="weather-search">
         <input
            type="text"
            placeholder="Enter city"
            value={ city }
            onChange={ (e) => setCity(e.target.value) }
         />
         <button onClick={ handleSearch }>Search</button>
      </div>
   );
};

// Add prop types for validation
WeatherSearch.propTypes = {
   fetchWeatherByCity: PropTypes.func.isRequired,
};
export default WeatherSearch;
