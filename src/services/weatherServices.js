const API_KEY = "3546dab260f1403980d71610222512";
const BASE_URL = "http://api.weatherapi.com/v1";

//'http://api.weatherapi.com/v1/current.json?key=3546dab260f1403980d71610222512&q=London&aqi=no'

const getWeatherData = (infoType, parameter) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...parameter, key: API_KEY });

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
const formatCurrentWeather = (data) => {
  const {
    location: { name, country, localtime },
    current: {
      temp_c,
      wind_kph,
      pressure_in,
      humidity,
      uv,
      vis_km,
      feelslike_c,
      condition,
    },
  } = data;

  const { text, icon } = condition;
  return {
    name,
    text,
    icon,
    country,
    localtime,
    temp_c,
    wind_kph,
    pressure_in,
    humidity,
    uv,
    vis_km,
    feelslike_c,
  };
};

const formatForecastWeather = (data) => {
  let {
    forecast: { forecastday },
  } = data;

  forecastday = forecastday.map((day) => {
    return {
      date: day.date,
      uv: day.day.uv,
      // hour: day.hour.slice(1, 4),
    };
  });

  return forecastday;
};
const getFormattedWeatherData = async (parameters) => {
  const formattedCurrentWeather = await getWeatherData(
    "current.json",
    parameters
  ).then(formatCurrentWeather);

  const formattedForecastWeather = await getWeatherData(
    "forecast.json",
    parameters
  ).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
