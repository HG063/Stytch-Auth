import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Stytch from "../Imgs/Stytch.png";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
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
          <Nav.Link href="/Stytch-Auth/Login">Login</Nav.Link>
          <Nav.Link href="/Stytch-Auth/SignUp">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
