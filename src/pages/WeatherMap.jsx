import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ArgentinaLayer from '../components/ArgentinaLayer';
import WeatherCard from '../components/WeatherCard';
import { getAllWeatherData } from '../data/provincesWeatherData';
import 'leaflet/dist/leaflet.css';
import './WeatherMap.css';

const WeatherMap = () => {
  const [selectedWeather, setSelectedWeather] = useState(null);

  const weatherData = getAllWeatherData();

  const handleProvinceClick = (weatherInfo) => {
    setSelectedWeather(weatherInfo);
  };

  const handleCloseCard = () => {
    setSelectedWeather(null);
  };

  return (
    <div className="weather-map-container">
      <div className="map-wrapper">
        <MapContainer
          center={[-38.416097, -63.616672]}
          zoom={6}
          minZoom={4}
          maxZoom={8}
          style={{ height: '70vh', width: '100%', minHeight: '900px' }}
          zoomControl={false}
        >
          <ArgentinaLayer
            weatherData={weatherData}
            onProvinceClick={handleProvinceClick}
          />
        </MapContainer>
      </div>

      {selectedWeather && (
        <WeatherCard
          weatherData={selectedWeather}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
};

export default WeatherMap;