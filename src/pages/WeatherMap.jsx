import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import WeatherCard from '../components/WeatherCard';
import { getAllWeatherData } from '../data/provincesWeatherData';
import 'leaflet/dist/leaflet.css';
import './WeatherMap.css';

/**
 * Componente para manejar el zoom y bounds del mapa
 * @param {object} props - Propiedades del componente
 * @param {Array} props.bounds - Coordenadas para hacer zoom
 * @returns {null} No renderiza nada visual
 */
const MapController = ({ bounds }) => {
  const map = useMap();

  React.useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 10
      });
    }
  }, [bounds, map]);

  return null;
};

/**
 * Componente principal del mapa meteorológico de Argentina
 * @returns {JSX.Element} Componente WeatherMap
 */
const WeatherMap = () => {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);
  const mapRef = useRef(null);

  // Obtener todos los datos meteorológicos
  const weatherData = getAllWeatherData();

    /**
   * Crear icono personalizado para cada marcador basado en la condición climática
   * @param {string} icon - Código del icono del clima
   * @param {number} temperature - Temperatura actual
   * @returns {Icon} Icono personalizado de Leaflet
   */
  const createWeatherIcon = (icon, temperature) => {
    const tempColor = getTemperatureColor(temperature);

    // Crear un SVG personalizado para el marcador
    const svgIcon = `
      <svg width="50" height="60" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="2" dy="2" result="offset"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Círculo de fondo -->
        <circle cx="25" cy="25" r="20" fill="${tempColor}" stroke="#fff" stroke-width="2" filter="url(#shadow)"/>

        <!-- Temperatura -->
        <text x="25" y="22" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Arial">
          ${temperature}°
        </text>

        <!-- Punto de anclaje -->
        <path d="M25,45 L30,55 L20,55 Z" fill="${tempColor}" stroke="#fff" stroke-width="1"/>
      </svg>
    `;

    return new Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`,
      iconSize: [50, 60],
      iconAnchor: [25, 55],
      popupAnchor: [0, -55],
    });
  };

  /**
   * Maneja el click en un marcador
   * @param {object} weatherInfo - Información meteorológica de la provincia
   */
  const handleMarkerClick = (weatherInfo) => {
    setSelectedWeather(weatherInfo);

    // Crear bounds para hacer zoom a la provincia
    const lat = weatherInfo.city.lat;
    const lng = weatherInfo.city.long;
    const bounds = [
      [lat - 0.5, lng - 0.5],
      [lat + 0.5, lng + 0.5]
    ];

    setMapBounds(bounds);
  };

  /**
   * Cierra la card de información meteorológica
   */
  const handleCloseCard = () => {
    setSelectedWeather(null);
    setMapBounds(null);
  };

  /**
   * Obtiene el color del marcador basado en la temperatura
   * @param {number} temperature - Temperatura actual
   * @returns {string} Color hexadecimal
   */
  const getTemperatureColor = (temperature) => {
    if (temperature < 0) return '#6B73FF'; // Azul para temperaturas muy frías
    if (temperature < 10) return '#4A90E2'; // Azul claro para temperaturas frías
    if (temperature < 20) return '#52C41A'; // Verde para temperaturas moderadas
    if (temperature < 30) return '#FAAD14'; // Amarillo para temperaturas cálidas
    return '#FF4D4F'; // Rojo para temperaturas muy cálidas
  };

  return (
    <div className="weather-map-container">

      <div className="map-wrapper">
        <MapContainer
          center={[-38.416097, -63.616672]} // Centro de Argentina
          zoom={5}
          style={{ height: '600px', width: '100%' }}
          ref={mapRef}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Controlador para manejar el zoom */}
          <MapController bounds={mapBounds} />

          {/* Marcadores para cada provincia */}
          {weatherData.map((weather) => (
            <Marker
              key={weather.city.id}
              position={[weather.city.lat, weather.city.long]}
              icon={createWeatherIcon(weather.days[0].icon, weather.days[0].temperature)}
              eventHandlers={{
                click: () => handleMarkerClick(weather),
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{weather.city.label}</h3>
                  <p><strong>{weather.days[0].temperature}°C</strong></p>
                  <p>{weather.days[0].description}</p>
                  <p>Haz clic en el marcador para más detalles</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Leyenda de temperaturas */}
      <div className="temperature-legend">
        <h3>Leyenda de Temperaturas</h3>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#6B73FF' }}></span>
            <span>Muy frío (&lt; 0°C)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#4A90E2' }}></span>
            <span>Frío (0-10°C)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#52C41A' }}></span>
            <span>Moderado (10-20°C)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FAAD14' }}></span>
            <span>Cálido (20-30°C)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FF4D4F' }}></span>
            <span>Muy cálido (&gt; 30°C)</span>
          </div>
        </div>
      </div>

      {/* Card de información meteorológica */}
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