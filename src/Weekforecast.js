import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SingleDayForecast from './SingleDayForecast';


function Weekforecast(props) {
    return (
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 mt-5"
        justify
      >
        <Tab eventKey="home" title="Home">
          
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <SingleDayForecast/>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">

        </Tab>
       
      </Tabs>
    );
}

export default Weekforecast;