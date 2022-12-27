import React from 'react';

function HourlyForecast(props) {
    return (
        < div  style={{ width: "8rem"}}>
        <h4 >
                {props.time}
            </h4>
            <h1>
            <img className= "weather-image"  alt="weatherImage" src={props.imgSrc} style={{ width: "5rem" }}></img>
            </h1>
            <h2>
            {props.temp}&deg;C
            </h2>
            
        </div>
    );
}

export default HourlyForecast;