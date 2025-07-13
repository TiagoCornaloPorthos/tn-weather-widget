/**
 * Datos mock de clima para las provincias argentinas
 * Basado en el formato proporcionado por el usuario
 */

export const provincesWeatherData = [
  {
    city: {
      id: 123456,
      label: "San Miguel de Tucumán",
      province: "Tucumán",
      lat: -26.8241,
      long: -65.2226
    },
    days: [
      {
        date: 1731250800,
        description: "lluvia ligera",
        icon: "10d",
        currentIcon: "10d",
        temperature: 24,
        min: 17,
        max: 27,
        rainProbability: "58 %",
        wind: {
          value: "27 km/h",
          direction: "Suroeste"
        },
        feelsLike: 23,
        pressure: 1016,
        humidity: "48 %",
        visibility: "10 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 24,
            humidity: "48 %",
            description: "lluvia ligera",
            rainProbability: "58 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123457,
      label: "Buenos Aires",
      province: "Buenos Aires",
      lat: -34.6037,
      long: -58.3816
    },
    days: [
      {
        date: 1731250800,
        description: "parcialmente nublado",
        icon: "02d",
        currentIcon: "02d",
        temperature: 22,
        min: 16,
        max: 26,
        rainProbability: "20 %",
        wind: {
          value: "15 km/h",
          direction: "Norte"
        },
        feelsLike: 21,
        pressure: 1018,
        humidity: "65 %",
        visibility: "10 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 22,
            humidity: "65 %",
            description: "parcialmente nublado",
            rainProbability: "20 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123458,
      label: "Córdoba",
      province: "Córdoba",
      lat: -31.4201,
      long: -64.1888
    },
    days: [
      {
        date: 1731250800,
        description: "soleado",
        icon: "01d",
        currentIcon: "01d",
        temperature: 28,
        min: 19,
        max: 32,
        rainProbability: "5 %",
        wind: {
          value: "12 km/h",
          direction: "Este"
        },
        feelsLike: 30,
        pressure: 1020,
        humidity: "40 %",
        visibility: "10 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 28,
            humidity: "40 %",
            description: "soleado",
            rainProbability: "5 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123459,
      label: "Rosario",
      province: "Santa Fe",
      lat: -32.9442,
      long: -60.6505
    },
    days: [
      {
        date: 1731250800,
        description: "nublado",
        icon: "04d",
        currentIcon: "04d",
        temperature: 25,
        min: 18,
        max: 28,
        rainProbability: "35 %",
        wind: {
          value: "18 km/h",
          direction: "Noreste"
        },
        feelsLike: 26,
        pressure: 1015,
        humidity: "55 %",
        visibility: "8 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 25,
            humidity: "55 %",
            description: "nublado",
            rainProbability: "35 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123460,
      label: "Mendoza",
      province: "Mendoza",
      lat: -32.8895,
      long: -68.8458
    },
    days: [
      {
        date: 1731250800,
        description: "despejado",
        icon: "01d",
        currentIcon: "01d",
        temperature: 26,
        min: 15,
        max: 30,
        rainProbability: "10 %",
        wind: {
          value: "20 km/h",
          direction: "Oeste"
        },
        feelsLike: 25,
        pressure: 1019,
        humidity: "35 %",
        visibility: "10 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 26,
            humidity: "35 %",
            description: "despejado",
            rainProbability: "10 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123461,
      label: "Salta",
      province: "Salta",
      lat: -24.7859,
      long: -65.4117
    },
    days: [
      {
        date: 1731250800,
        description: "tormenta",
        icon: "11d",
        currentIcon: "11d",
        temperature: 23,
        min: 16,
        max: 26,
        rainProbability: "85 %",
        wind: {
          value: "35 km/h",
          direction: "Sur"
        },
        feelsLike: 22,
        pressure: 1012,
        humidity: "75 %",
        visibility: "5 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 23,
            humidity: "75 %",
            description: "tormenta",
            rainProbability: "85 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123462,
      label: "Neuquén",
      province: "Neuquén",
      lat: -38.9516,
      long: -68.0591
    },
    days: [
      {
        date: 1731250800,
        description: "viento",
        icon: "50d",
        currentIcon: "50d",
        temperature: 18,
        min: 8,
        max: 22,
        rainProbability: "15 %",
        wind: {
          value: "45 km/h",
          direction: "Oeste"
        },
        feelsLike: 15,
        pressure: 1022,
        humidity: "30 %",
        visibility: "8 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 18,
            humidity: "30 %",
            description: "viento",
            rainProbability: "15 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123463,
      label: "Posadas",
      province: "Misiones",
      lat: -27.3621,
      long: -55.9012
    },
    days: [
      {
        date: 1731250800,
        description: "lluvia intensa",
        icon: "09d",
        currentIcon: "09d",
        temperature: 27,
        min: 21,
        max: 30,
        rainProbability: "90 %",
        wind: {
          value: "25 km/h",
          direction: "Noreste"
        },
        feelsLike: 32,
        pressure: 1010,
        humidity: "85 %",
        visibility: "3 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 27,
            humidity: "85 %",
            description: "lluvia intensa",
            rainProbability: "90 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123464,
      label: "Ushuaia",
      province: "Tierra del Fuego",
      lat: -54.8019,
      long: -68.3030
    },
    days: [
      {
        date: 1731250800,
        description: "nieve",
        icon: "13d",
        currentIcon: "13d",
        temperature: 2,
        min: -2,
        max: 6,
        rainProbability: "70 %",
        wind: {
          value: "30 km/h",
          direction: "Suroeste"
        },
        feelsLike: -3,
        pressure: 1025,
        humidity: "90 %",
        visibility: "2 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 2,
            humidity: "90 %",
            description: "nieve",
            rainProbability: "70 %"
          }
        ]
      }
    ]
  },
  {
    city: {
      id: 123465,
      label: "San Salvador de Jujuy",
      province: "Jujuy",
      lat: -24.1857,
      long: -65.2995
    },
    days: [
      {
        date: 1731250800,
        description: "parcialmente soleado",
        icon: "02d",
        currentIcon: "02d",
        temperature: 21,
        min: 14,
        max: 25,
        rainProbability: "25 %",
        wind: {
          value: "22 km/h",
          direction: "Norte"
        },
        feelsLike: 20,
        pressure: 1017,
        humidity: "50 %",
        visibility: "9 km",
        hourly: [
          {
            date: 1731250800,
            temperature: 21,
            humidity: "50 %",
            description: "parcialmente soleado",
            rainProbability: "25 %"
          }
        ]
      }
    ]
  }
];

/**
 * Función para obtener datos de clima por provincia
 * @param {string} province - Nombre de la provincia
 * @returns {object|null} Datos de clima de la provincia o null si no se encuentra
 */
export const getWeatherByProvince = (province) => {
  return provincesWeatherData.find(data =>
    data.city.province.toLowerCase() === province.toLowerCase()
  );
};

/**
 * Función para obtener todos los datos de clima
 * @returns {Array} Array con todos los datos de clima
 */
export const getAllWeatherData = () => {
  return provincesWeatherData;
};