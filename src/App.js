import { useEffect, useState } from "react";
import "./App.css";
import InputNavigation, {cityName} from "./InputNavigation";
import getFormattedWeatherData from "./services/weatherServices";
import TemperatureCard from "./TemperatureCard";
import Weekforecast from "./Weekforecast";

function App() {

  const[weatherInfo,setWeatherInfo] =useState(null);
  
  useEffect(()=>{
   const fetchWeather = async () => {
     const data = await getFormattedWeatherData({ q: cityName,days:3});
     setWeatherInfo(data);
     
   };
 
   fetchWeather();

 },[])

  return (
    <div className="container">
      <InputNavigation />
      {weatherInfo && (
        <div>
      <TemperatureCard  weatherInfo = {weatherInfo}/>
      <Weekforecast weatherInfo = {weatherInfo} />
          </div>
      )}
    </div>
  );
}

export default App;
