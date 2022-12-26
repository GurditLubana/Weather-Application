import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import Stack from "react-bootstrap/Stack";

function TemperatureCard(props) {
  const  todaysDate = new Date().toString();
  const day = todaysDate.substring(0,4);
  const date = todaysDate.substring(4,16);
  const currentTime = todaysDate.substring(16,21);
 
  return (
    <Card className="mx-auto my-3" style={{ width: "30rem" }}>
      
      <h2 className="py-3 my-1 mx-auto">{props.weatherInfo.name}, {props.weatherInfo.country}</h2>
      <Card.Body >
        <div className="align_center">
       <h4>{day}, {date}| {currentTime}</h4> 
      <h5 className="mt-4">{props.weatherInfo.text}</h5>
        </div>
        <Card.Title>
          <Stack direction="horizontal" gap={3}>
            <h1 className="mx-auto mt-3 align_center">
              <img alt="weatherImage" src={props.weatherInfo.icon}></img>
              {props.weatherInfo.temp_c}&deg;C
            </h1>
           
          </Stack>
        </Card.Title>
        {/* <Card.Text className= "align_center"> */}
        <Stack direction="horizontal" gap={3}>

          Feels like: {props.weatherInfo.feelslike_c}&deg;C 
          <div className="vr" />
          H: {props.weatherInfo[0].maxTemp}&deg;C 
          <div className="vr" />
           L: {props.weatherInfo[0].minTemp}&deg;C
        </Stack>
          
        {/* </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Row>
            <Col>Humidity: {props.weatherInfo.humidity}%</Col>
            <Col>Precipitation: {props.weatherInfo.precip_mm}mm</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Pressure: {props.weatherInfo.pressure_in} in</Col>
            <Col>Visibility: {props.weatherInfo.vis_km} km</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Row>
            <Col>Wind Speed: {props.weatherInfo.wind_kph} km/h</Col>
            <Col>
              UV: {props.weatherInfo.uv}
              <ProgressBar variant="warning" now={parseInt(props.weatherInfo.uv)*10} />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default TemperatureCard;
