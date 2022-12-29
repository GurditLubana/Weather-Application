import { useEffect, useState } from "react";
import "./App.css";
import InputNavigation from "./InputNavigation";
import getFormattedWeatherData from "./services/weatherServices";
import TemperatureCard from "./TemperatureCard";
import Weekforecast from "./Weekforecast";

function App() {

  const[weatherInfo,setWeatherInfo] =useState(null);
  const[cityName,setCityName]= useState("Calgary")
  
  useEffect(()=>{
   const fetchWeather = async () => {
     const data = await getFormattedWeatherData({ q: cityName,days:3});
     setWeatherInfo(data);
    
     
   };
 
   fetchWeather();

 },[cityName])

  return (
    <div className="container" style={{ width: "90%" }}>
      <InputNavigation  setCityName= {setCityName}/>
      {weatherInfo && (
        <div>
      <TemperatureCard  weatherInfo = {weatherInfo} />
      <Weekforecast weatherInfo = {weatherInfo} />
          </div>
      )}
    </div>
  );
}

export default App;
