import React from 'react';

function HourlyForecast(props) {
    return (
        < >
        <h4 className='ms-auto'>
                {props.time}
            </h4>
            <h1>
            <img alt="weatherImage" src={props.imgSrc}></img>
            {props.temp}&deg;C
            </h1>
            
        </>
    );
}

export default HourlyForecast;