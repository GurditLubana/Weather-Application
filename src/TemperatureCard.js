
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


import Stack from "react-bootstrap/Stack";
export var citName = "london";

function TemperatureCard() {


  return (
    <Card style={{ width: "30rem" }}>
      {/* <Card.Img  variant="top" src={imgsrc} /> */}
      
      <div className= "py-3 mx-auto" id="name"></div>
      <Card.Body>
        <Card.Title>
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light ms-auto"><span id="temp_c"></span>&deg;C</div>
            <div className="bg-light ms-auto">H<span id="maxtemp_c"></span>&deg;C</div>
            <div className="vr" />
            <div className="bg-light">L<span id="mintemp_c"></span>&deg;C</div>
          </Stack>
          
        </Card.Title>
        <Card.Text >
          Feels like:<span id="feelslike_c"></span>

          <span id="condition"></span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        
      <Row>
        <Col>Humidity: <span id="humidity"></span>%</Col>
        <Col>Precipitation: <span id="precip_mm"></span> mm</Col>
      </Row>
      
  

        </ListGroup.Item>
        <ListGroup.Item>
            
      <Row>
        <Col>Pressure: <span id="pressure_in"></span>  in</Col>
        <Col>Visibility: <span id="vis_km"></span> km</Col>
      </Row>
        </ListGroup.Item>
        <ListGroup.Item> <Row>
        <Col>Wind Speed: <span id="wind_kph"></span> km/h</Col>
        <Col>UV: <span id="uv"></span>
        
        <ProgressBar  variant="warning" now={40} /></Col>
      </Row></ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default TemperatureCard;
