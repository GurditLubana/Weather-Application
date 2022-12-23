
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import HourlyForecast from './HourlyForecast';

function SingleDayForecast(props) {
    return (
        <ListGroup key = 'sm' horizontal='sm' className="my-2">
          <ListGroup.Item>
            <HourlyForecast temp = {props.temp} time = {props.time}/>
          </ListGroup.Item>
         
        </ListGroup>
    );
}

export default SingleDayForecast;