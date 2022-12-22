import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function TemperatureCard() {
    return (
        <Card className = "container" style={{ width: '22rem', background: 'lightblue'}}>
          <Card.Body>
            <Card.Title className="text-center" style={{fontSize: "50px"}}><span id = "temperature"></span>&deg;C</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
          </Card.Body>
          <ListGroup className="list-group-flush ">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default TemperatureCard;