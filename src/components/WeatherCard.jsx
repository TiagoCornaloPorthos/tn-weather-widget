import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null

  const { city, days } = weatherData
  const currentDay = days[0]

  const getWeatherIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }

  const temperatureColor = (temperature) => {
    if (temperature < 15) return 'cold'
    if (temperature < 25) return 'warm'
    if (temperature >= 25) return 'hot'
  }

  return (
    <div className='weather-card'>
      <div
        className={`weather-card-header ${temperatureColor(
          currentDay.temperature
        )}`}
      >
        <span className='current-temp'>{currentDay.temperature}°</span>
        <h2>{city.label.toUpperCase()}</h2>
      </div>

      <div className='weather-card-body'>
        <div className='weather-description-container'>
          <span className='description'>{currentDay.description}</span>
          <img
            className='weather-icon'
            src={getWeatherIconUrl(currentDay.currentIcon)}
            alt={currentDay.description}
          />
        </div>

        <div className='weather-details'>
          <div className='detail-row'>
            <span className='detail-label'>Sensación térmica:</span>
            <span className='detail-value'>{currentDay.feelsLike}°C</span>
          </div>
          <div className='detail-row'>
            <span className='detail-label'>Precipitaciones:</span>
            <span className='detail-value'>{currentDay.rainProbability}</span>
          </div>
          <div className='detail-row'>
            <span className='detail-label'>Humedad:</span>
            <span className='detail-value'>{currentDay.humidity}</span>
          </div>
          <div className='detail-row'>
            <span className='detail-label'>Visibilidad:</span>
            <span className='detail-value'>{currentDay.visibility}</span>
          </div>
          <div className='detail-row'>
            <span className='detail-label'>Viento:</span>
            <span className='detail-value'>a {currentDay.wind.value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
