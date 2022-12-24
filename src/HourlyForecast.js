import React from 'react';

function HourlyForecast(props) {
    return (
        < >
            <h1>
            <img alt="weatherImage" src={props.imgSrc}></img>
            {props.temp}&deg;C
            </h1>
            <h4>
                {props.time}
            </h4>
        </>
    );
}

export default HourlyForecast;