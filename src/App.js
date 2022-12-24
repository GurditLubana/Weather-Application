
import { useEffect, useState } from 'react';
import './App.css'
import InputNavigation from './InputNavigation';
import TemperatureCard from './TemperatureCard';
import Weekforecast from './Weekforecast';

function App() {

  const [allValues,setValues] = useState(
   [ {
      temp:"",minTemp :"",maxTemp:"",cityName:"",condition:"",feelsLike:"",humidity:"",precp:"",
      pressure:"", uv:"",visibility:"",windSpeed:"",imgIcon:""
    }]
  );

  const [todaysForecast,setForecast] = useState([{}])
  const [tmmrwsForecast,setForecast2] = useState([{}])
  const [dayafterForecast,setForecast3] = useState([{}])



  useEffect(()=>{
        fetchData()
  },[])

  const fetchData = ()=>{
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f450c78fb7msh8765990528797f3p1cda5ejsn15acb181d563",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Winnipeg&days=3",
    options
  )
    .then((response) => response.json())
    .then((response) => { console.log(response)
    
      setValues({
        temp:response.current.temp_c,
        minTemp:response.forecast.forecastday[0].day.mintemp_c,
        maxTemp:response.forecast.forecastday[0].day.maxtemp_c,
        cityName:response.location.name,
        condition:response.current.condition.text,
        feelsLike:response.current.feelslike_c,
        humidity:response.current.humidity,
        precp:response.current.precip_mm,
        pressure:response.current.pressure_in,
        uv:response.current.uv,
        visibility:response.current.vis_km,
        windSpeed:response.current.wind_kph,
        imgIcon:response.current.condition.icon
      })
      setForecast(response.forecast.forecastday[0].hour);
      setForecast2(response.forecast.forecastday[1].hour);
      setForecast3(response.forecast.forecastday[2].hour);

    })
    .catch((err) => console.error(err));  
  }
 
  return(
    <div className='container'>
    <InputNavigation/>
    <TemperatureCard allValues= {allValues}/>
    <Weekforecast todaysData ={todaysForecast} tmmrwData = {tmmrwsForecast} thirdDayData = {dayafterForecast} />
    
      
    </div> );
}

export default App;
