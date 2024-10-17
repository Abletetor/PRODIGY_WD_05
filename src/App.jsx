import { useState, useEffect } from 'react';
import './App.css';
import WeatherSearch from './Component/WeatherSearch/WeatherSearch';
import WeatherCard from './Component/WeatherCard/WeatherCard';
import DarkModeToggle from './Component/DarkModeToggle/DarkModeToggle';

import { getWeatherByLocation, getWeatherByCoordinates } from './Component/Utils/API';
import Footer from './Component/Footer/Footer';

const App = () => {
   const [weatherData, setWeatherData] = useState(null);
   const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem('darkMode') === 'true';
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   useEffect(() => {
      // Get current location's weather when the app loads
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByCoords(latitude, longitude);
         },
         (error) => console.error('Error getting location:', error)
      );
   }, []);

   const fetchWeatherByCity = async (city) => {
      try {
         setLoading(true);
         setError('');
         const response = await getWeatherByLocation(city);
         setWeatherData(response.data);
      } catch (err) {
         setError('City not found or invalid input', err);
      } finally {
         setLoading(false);
      }
   };

   const fetchWeatherByCoords = async (lat, lon) => {
      try {
         setLoading(true);
         setError('');
         const response = await getWeatherByCoordinates(lat, lon);
         setWeatherData(response.data);
      } catch (err) {
         setError('Error fetching weather for current location', err);
      } finally {
         setLoading(false);
      }
   };

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', !darkMode);
   };

   return (
      <>
         <div className={ `app ${darkMode ? 'dark' : ''}` }>
            <header className="app-header">
               <h1>Weather App</h1>
               <DarkModeToggle darkMode={ darkMode } toggleDarkMode={ toggleDarkMode } />
            </header>
            <WeatherSearch fetchWeatherByCity={ fetchWeatherByCity } />
            { loading && <p>Loading...</p> }
            { error && <p className="error-message">{ error }</p> }
            { weatherData && <WeatherCard data={ weatherData } /> }
            <Footer />
         </div>
      </>
   );
};

export default App;
