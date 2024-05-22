import React from 'react';
import WeatherApp from './weatherApp/WeatherApp';

const api = {
  key: "409f6514aa06f9f298afd768741df7c3",
  base: "https://home.openweathermap.org/api_keys"
}



const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <h2><WeatherApp /></h2>
      {/* location */}
      <p>Manchester, United Kingdom</p>
      {/* temp */}
      <p>18°C</p>
      {/* weather */}
      <p>Raining</p>
    </div>
  )
}
export default App