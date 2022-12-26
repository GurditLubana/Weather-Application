import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HourlyForecast from "./HourlyForecast";

function SingleDayForecast(props) {
 
 let ids = parseInt(props.id);
  var time = "";
  let forecast = props.dayInfo.hour.map((hourInfo)=>
  {
    time = (hourInfo.time).slice(11);
    return (

          <ListGroup.Item key = {ids++} className="mx-2 ">
            <HourlyForecast temp={hourInfo.temp} time={time} imgSrc = {hourInfo.condition.icon}/>
          </ListGroup.Item>

           );
  }
  )
  return (
  
    <ListGroup key= {ids} horizontal="sm" className="my-2">
      {forecast}
    </ListGroup>

    
      
  

  )
 
}

export default SingleDayForecast;
