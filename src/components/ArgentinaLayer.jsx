import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import * as topojson from 'topojson-client';
import L from 'leaflet';
import argentinaData from '../pages/argentina-provinces.json';
import './ArgentinaLayer.css';
import { getTemperatureColor } from '../utils/temperatureColor';

const ArgentinaLayer = ({ onProvinceClick, weatherData }) => {
  const map = useMap();
  const isInitialRender = useRef(true);

  const createWeatherMarker = (weather) => {
    const temperature = weather.days[0].temperature;
    const tempColor = getTemperatureColor(temperature);

    const html = `
      <div class="weather-marker-container">
        <div class="temp-badge" style="background-color: ${tempColor}">
          ${temperature}°
        </div>
        <div class="province-badge">
          ${weather.city.province}
        </div>
      </div>
    `;

    return L.divIcon({
      html,
      className: 'custom-weather-marker',
      iconSize: [100, 28],
      iconAnchor: [50, 14],
    });
  };

  useEffect(() => {
    // Limpiar layers existentes
    map.eachLayer((layer) => {
      if (layer instanceof L.GeoJSON || layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    const provinces = topojson.feature(argentinaData, argentinaData.objects.ARG_adm1);

    const provincesLayer = L.geoJSON(provinces, {
      style: {
        color: '#0D6CCD',
        fillColor: '#ACD7FF',
        fillOpacity: 0.8,
        weight: 1,
      },
      onEachFeature: (feature, layer) => {
        const provinceName = feature.properties.NAME_1;

        const weatherInfo = weatherData.find(w =>
          w.city.province.toLowerCase() === provinceName.toLowerCase()
        );

        layer.on({
          click: () => {
            if (weatherInfo) {
              map.fitBounds(layer.getBounds(), {
                padding: [50, 50],
                maxZoom: 8
              });

              if (onProvinceClick) {
                onProvinceClick(weatherInfo);
              }
            }
          },
          mouseover: () => {
            layer.setStyle({
              fillColor: '#87CEEB',
              weight: 1,
            });
          },
          mouseout: () => {
            layer.setStyle({
              fillColor: '#ACD7FF',
              weight: 1,
            });
          },
        });
      },
    }).addTo(map);

        // Agregar marcadores de clima (solo visuales, sin eventos)
    weatherData.forEach(weather => {
      L.marker(
        [weather.city.lat, weather.city.long],
        {
          icon: createWeatherMarker(weather),
          interactive: false // Deshabilitar todos los eventos del marcador
        }
      ).addTo(map);
    });

    // Solo hacer fitBounds en el primer render, no en actualizaciones posteriores
    if (isInitialRender.current) {
      map.fitBounds(provincesLayer.getBounds());
      isInitialRender.current = false;
    }

  }, [map, weatherData, onProvinceClick]);

  return null;
};

export default ArgentinaLayer;