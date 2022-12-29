import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import {WiHumidity, WiRain,WiThermometer,WiDayFog, WiWindBeaufort0,WiHot} from "react-icons/wi";
import Stack from "react-bootstrap/Stack";

function TemperatureCard(props) {
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
  const localDate = props.weatherInfo.localtime;
  const year = localDate.substring(0, 4);
  const month = months[parseInt(localDate.substring(5, 7)) - 1];
  const date = localDate.substring(8, 10);
  const fullDate = date + " " + month + " " + year;
  const day = week[parseInt(new Date(fullDate).getDay())];
  const currentTime = formattedTime(localDate.substring(11));

  return (
    <Card className="mx-auto my-3 temp-card" style={{ width: "90%" }}>
      <h2 className="py-3 my-1 mx-auto">
        {props.weatherInfo.name}, {props.weatherInfo.country}
      </h2>
      <Card.Body>
        <div className="align_center">
          <h5>
            {day}, {fullDate} | {currentTime}
          </h5>
          <h5 className="mt-4">{props.weatherInfo.text}</h5>
        </div>
        <Card.Title>
          <Stack direction="horizontal" gap={3}>
            <h1 className="mx-auto  align_center">
              <img alt="weatherImage" src={props.weatherInfo.icon} style={{ width: "8rem", height:"8rem" }}></img>
              {props.weatherInfo.temp_c} &deg;C
            </h1>
          </Stack>
        </Card.Title>
      <h5>

        <Stack direction="horizontal" gap={3}>
          Feels like: {props.weatherInfo.feelslike_c}&deg;C
          <div className="vr" />
          High: {props.weatherInfo[0].maxTemp}&deg;C
          <div className="vr" />
          Low: {props.weatherInfo[0].minTemp}&deg;C
          <div className="vr" />
          Sunrise: {props.weatherInfo[0].sunrise}
          <div className="vr" />
          Sunset: {props.weatherInfo[0].sunset}
        </Stack>
      </h5>

      </Card.Body>
      <ListGroup className="list-group-flush my-3">
        <ListGroup.Item className="temp-card">
          <Row>
            <Col><h5><span><WiHumidity/></span> Humidity: {props.weatherInfo.humidity}%</h5></Col>
            <Col><h5><span><WiRain/></span> Precipitation: {props.weatherInfo.precip_mm} mm</h5></Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item  className="temp-card">
          <Row>
            <Col><h5><span><WiThermometer/></span> Pressure: {props.weatherInfo.pressure_in} in</h5></Col>
            <Col><h5><span><WiDayFog/></span> Visibility: {props.weatherInfo.vis_km} km</h5></Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item  className="temp-card">
          {" "}
          <Row>
            <Col><h5><span><WiWindBeaufort0/></span>Wind: {props.weatherInfo.wind_kph} km/h</h5></Col>
            <Col ><h5><span><WiHot/></span>
               UV index: {props.weatherInfo.uv}
              <ProgressBar
                variant="warning"
                now={parseInt(props.weatherInfo.uv) * 10}
                className="mt-3"
              />
            </h5></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default TemperatureCard;
