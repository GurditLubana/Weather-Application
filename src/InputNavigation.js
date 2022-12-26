import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function InputNavigation(props) {
  const [cityNameInput, setCityInput] = useState("");

  const onChangeInputHandler = (e) => {
    setCityInput(e.target.value);
  };

  const onClickHandler = () => {
    props.setCityName(cityNameInput);
  };


  return (

    <Navbar  expand="lg">
      <Container className = "navBar">
        <Navbar.Brand href=""></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <button
                className="btn bg-warning mx-1 my-1"
                type="submit"
                onClick={() => {
                  props.setCityName("Winnipeg");
                }}
              >
                Winnipeg
              </button>
              <button
                className="btn bg-warning mx-1 my-1"
                type="submit"
                onClick={() => {
                  props.setCityName("Tokyo");
                }}
              >
                Tokyo
              </button>
              <button
                className="btn bg-warning mx-1 my-1"
                type="submit"
                onClick={() => {
                  props.setCityName("Mumbai");
                }}
              >
                Mumbai
              </button>
              <button
                className="btn bg-warning mx-1 my-1 border"
                type="submit"
                onClick={() => {
                  props.setCityName("London");
                }}
              >
                London
              </button>
              <button
                className="btn bg-warning mx-1 my-1 border"
                type="submit"
                onClick={() => {
                  props.setCityName("Chandigarh");
                }}
              >
                Chandigarh
              </button>

            
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
              <input
                id="cityNameId"
                className="form-control me-2 mx-2"
                type="search"
                value={cityNameInput}
                onChange={onChangeInputHandler}
                placeholder="Search the city..."
                aria-label="Search"
              />
              <button
                className="btn bg-warning"
                type="submit"
                onClick={onClickHandler}
              >
                Search
              </button>
            </div>
      </Container>
    </Navbar>
  );
}

export default InputNavigation;

