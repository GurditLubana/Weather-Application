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

      <div className="py-3 mx-auto">{props.allValues.cityName}</div>
      <Card.Body>
        <Card.Title>
          <Stack direction="horizontal" gap={3}>
            <h1 className="ms-auto">
              <img alt="weatherImage" src={props.allValues.imgIcon}></img>
              {props.allValues.temp}&deg;C
            </h1>
            <h6 className="ms-auto">H{props.allValues.maxTemp}&deg;C</h6>
            <div className="vr" />
            <h6 className="bg-light">L{props.allValues.minTemp}&deg;C</h6>
          </Stack>
        </Card.Title>
        <Card.Text>
          Feels like:{props.allValues.feelsLike}&deg;C
          {props.allValues.condition} weather
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Row>
            <Col>Humidity:{props.allValues.humidity}%</Col>
            <Col>Precipitation: {props.allValues.precp}mm</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Pressure: {props.allValues.pressure} in</Col>
            <Col>Visibility: {props.allValues.visibility} km</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <Row>
            <Col>Wind Speed: {props.allValues.windSpeed} km/h</Col>
            <Col>
              UV: {props.allValues.uv}
              <ProgressBar variant="warning" now={10} />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default TemperatureCard;
