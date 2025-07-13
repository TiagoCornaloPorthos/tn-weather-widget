import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData, onClose }) => {
  if (!weatherData) return null;

  const { city, days } = weatherData;
  const currentDay = days[0];

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getWeatherIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2>{city.label}</h2>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="weather-card-body">
        <div className="weather-main">
          <div className="weather-icon">
            <img
              src={getWeatherIconUrl(currentDay.currentIcon)}
              alt={currentDay.description}
            />
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span className="current-temp">{currentDay.temperature}°C</span>
              <span className="description">{currentDay.description}</span>
            </div>
            <div className="temp-range">
              <span className="min-temp">Mín: {currentDay.min}°C</span>
              <span className="max-temp">Máx: {currentDay.max}°C</span>
            </div>
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-row">
            <span className="detail-label">Sensación térmica:</span>
            <span className="detail-value">{currentDay.feelsLike}°C</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Probabilidad de lluvia:</span>
            <span className="detail-value">{currentDay.rainProbability}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Viento:</span>
            <span className="detail-value">{currentDay.wind.value} {currentDay.wind.direction}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Humedad:</span>
            <span className="detail-value">{currentDay.humidity}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Presión:</span>
            <span className="detail-value">{currentDay.pressure} hPa</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Visibilidad:</span>
            <span className="detail-value">{currentDay.visibility}</span>
          </div>
        </div>

        <div className="weather-date">
          <span>{formatDate(currentDay.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;