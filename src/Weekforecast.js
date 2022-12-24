import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SingleDayForecast from './SingleDayForecast';


function Weekforecast(props) {
  // console.log(props.tmmrwsData[0])
    return (
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 mt-5"
        justify
      >
        <Tab eventKey="yesterday" title="Yesterday">
        <SingleDayForecast data = {props.tmmrwData}/>
        </Tab>
        <Tab eventKey="today" title="Today">
        <SingleDayForecast data = {props.todaysData}/>
        
        </Tab>
        <Tab eventKey="tommorow" title="Tommorow">
        <SingleDayForecast data = {props.thirdDayData}/>
        </Tab>
       
      </Tabs>
    );
}

export default Weekforecast;