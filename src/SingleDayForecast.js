import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HourlyForecast from "./HourlyForecast";

function SingleDayForecast(props) {
 
  let key = 0;
  var time = "";
  console.log(props.dayInfo.hour);
  let forecast = props.dayInfo.hour.map((hourInfo)=>
  {
    time = (hourInfo.time).slice(11);
    return (

          <ListGroup.Item className="mx-2 ">
            <HourlyForecast temp={hourInfo.temp} time={time} imgSrc = {hourInfo.condition.icon}/>
          </ListGroup.Item>

           );
  }
  )
  return (
  
    <ListGroup key= {key++} horizontal="sm" className="my-2">
      {forecast}
    </ListGroup>

    
      
  

  )
 
}

export default SingleDayForecast;
