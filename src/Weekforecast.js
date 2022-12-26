import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SingleDayForecast from './SingleDayForecast';


function Weekforecast(props) {
  var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = (new Date(props.weatherInfo[2].date)).getDay();
  

    return (
      
        <Tabs
        defaultActiveKey="today"
        className="mb-3 mt-5 py-3"
        justify
      >
        <Tab eventKey="today" title="Today">
        <SingleDayForecast id= "10" dayInfo= {props.weatherInfo[0]}/>
        </Tab>
        <Tab eventKey="tmmrw" title="Tommorow">
        <SingleDayForecast id= "40" dayInfo= {props.weatherInfo[1]}/>
        
        </Tab>
        <Tab eventKey="thirdDay" title={week[day+1]}>
        <SingleDayForecast id= "80" dayInfo= {props.weatherInfo[2]}/>
        </Tab>
       
      </Tabs>
    );
}

export default Weekforecast;