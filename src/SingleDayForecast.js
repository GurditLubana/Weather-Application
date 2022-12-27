import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HourlyForecast from "./HourlyForecast";

function SingleDayForecast(props) {
  const formattedTime = (time) => {
    let hour = parseInt(time.substring(0, 2));
    if (hour > 12) {
      hour = hour - 12;
      time = hour + time.substring(2) + " PM";
    } else {
      time = time + " AM";
    }

    return time;
  };
 let ids = parseInt(props.id);
  var time = "";
  let forecast = props.dayInfo.hour.map((hourInfo)=>
  {
    time = formattedTime((hourInfo.time).slice(11));
    return (

          <ListGroup.Item key = {ids++}  className="hourlyCards mx-2 my-2">
            <HourlyForecast  temp={hourInfo.temp} time={time} imgSrc = {hourInfo.condition.icon} />
          </ListGroup.Item>

           );
  }
  )
  return (
  
    <ListGroup key= {ids} horizontal="sm" className="my-2 list-group">
      {forecast}
    </ListGroup>

    
      
  

  )
 
}

export default SingleDayForecast;
