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
        justify
        className='tabs'
      >
        <Tab className="list" eventKey="today"  title="Today">
        <SingleDayForecast className="tab_content" id= "10" dayInfo= {props.weatherInfo[0]}/>
        </Tab>
        <Tab className="list" eventKey="tmmrw" title="Tommorow">
        <SingleDayForecast className="tab_content" id= "40" dayInfo= {props.weatherInfo[1]}/>
        
        </Tab>
        <Tab className="list" eventKey="thirdDay" title={week[day+1]}>
        <SingleDayForecast className="tab_content" id= "80" dayInfo= {props.weatherInfo[2]}/>
        </Tab>
       
      </Tabs>
    );
}

export default Weekforecast;