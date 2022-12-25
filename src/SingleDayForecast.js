import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HourlyForecast from "./HourlyForecast";

function SingleDayForecast(props) {
  // console.log(props.data[0].time);
  // const [timeValue,setTimeValue] = useState("00:00")
  // setTimeValue((props.date[0].time).slice(11))
  let timeValue = props.date[0].time;
  return (
    <>
      <ListGroup key="sm" horizontal="sm" className="my-2">
        <ListGroup.Item className="mx-2">
          <HourlyForecast temp={props.data[0].temp_c} time={timeValue} imgSrc = ""/>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default SingleDayForecast;
