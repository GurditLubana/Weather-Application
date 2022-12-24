import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import HourlyForecast from "./HourlyForecast";

function SingleDayForecast(props) {
  // console.log(props.data[0]);
  return (
    <>
      <ListGroup key="sm" horizontal="sm" className="my-2">
        <ListGroup.Item className="mx-2">
          <HourlyForecast temp={props.data[0].feelslike_c} time="5" />
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default SingleDayForecast;
