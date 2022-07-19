import './App.css';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';
import { weatherApiUrl, weatherApiKey } from './api'
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState()
  const [weatherForecast, setWeatherForecast] = useState()

  const HandleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const CurrentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)
    const WeatherForecastFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)

    Promise.all([CurrentWeatherFetch, WeatherForecastFetch]).then(
      async (response) => {
        const currentWeatherResponse = await response[0].json()
        const weatherForecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...currentWeatherResponse })
        setWeatherForecast({ city: searchData.label, ...weatherForecastResponse })
      })
      .catch((err) => {
        console.log("err : ", err)
      })
  }

  return (
    <div className="container">
      <Search onSearchChange={HandleOnSearchChange} />
      <CurrentWeather data={currentWeather} />
    </div>
  );
}

export default App;
