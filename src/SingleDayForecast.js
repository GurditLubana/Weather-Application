
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import HourlyForecast from './HourlyForecast';

function SingleDayForecast(props) {
    return (
        <ListGroup key = 'sm' horizontal='sm' className="my-2">
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>
          <ListGroup.Item className='mx-2'>
            <HourlyForecast temp = '4' time = '5'/>
          </ListGroup.Item>

        </ListGroup>
    );
}

export default SingleDayForecast;