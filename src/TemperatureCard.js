import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import Stack from "react-bootstrap/Stack";

function TemperatureCard(props) {
  return (
    <Card style={{ width: "30rem" }}>
      {/* <Card.Img variant="top" src={props.allValues.imgIcon} /> */}

      <div className="py-3 mx-auto">{props.allValues.name}</div>
      <Card.Body>
        <Card.Title>
          <Stack direction="horizontal" gap={3}>
            <h1 className="ms-auto">
              <img alt="weatherImage" src={props.allValues.icon}></img>
              {props.allValues.temp_c}&deg;C
            </h1>
            <h6 className="ms-auto">H{props.allValues[0].maxTemp}&deg;C</h6>
            <div className="vr" />
            <h6 className="bg-light">L{props.allValues[0].minTemp}&deg;C</h6>
          </Stack>
        </Card.Title>
        <Card.Text>
          Feels like:{props.allValues.feelslike_c}&deg;C
          {props.allValues.text} weather
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Row>
            <Col>Humidity:{props.allValues.humidity}%</Col>
            <Col>Precipitation: {props.allValues.precip_mm}mm</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Pressure: {props.allValues.pressure_in} in</Col>
            <Col>Visibility: {props.allValues.vis_km} km</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Row>
            <Col>Wind Speed: {props.allValues.wind_kph} km/h</Col>
            <Col>
              UV: {props.allValues.uv}
              <ProgressBar variant="warning" now={parseInt(props.allValues.uv)*10} />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default TemperatureCard;
