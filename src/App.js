import { useEffect, useState } from "react";
import "./App.css";
import InputNavigation from "./InputNavigation";
import getFormattedWeatherData from "./services/weatherServices";
import TemperatureCard from "./TemperatureCard";
import Weekforecast from "./Weekforecast";

function App() {

  const[weatherInfo,setWeatherInfo] =useState(null);
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "Winnipeg" ,days:3});
    setWeatherInfo(data);
   
  };

  fetchWeather();

 

  return (
    <div className="container">
      <InputNavigation />
      {weatherInfo && (
        <div>
      <TemperatureCard  allValues = {weatherInfo}/>
      {/* <Weekforecast todaysData ={todaysForecast} tmmrwData = {tmmrwsForecast} thirdDayData = {dayafterForecast} /> */}
          </div>
      )}
    </div>
  );
}

export default App;
