import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Stytch from "../Img/Stytch.png";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Stytch"
            src={Stytch}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Stytch App
        </Navbar.Brand>
        <Nav className="d-flex justify-content-end">
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/SignUp">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
