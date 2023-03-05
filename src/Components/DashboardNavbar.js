import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Stytch from "../Img/Stytch.png";
import { useStytch } from "@stytch/react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const stytchClient = useStytch();
  const navigate = useNavigate();

  const logout = () => {
    stytchClient.session.revoke();
    navigate("/Login");
  };

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
          <Nav.Link onClick={logout} className="d-flex align-items-center">
            Logout{" "}
            <BiLogOutCircle
              style={{ width: "22px", height: "22px", paddingLeft: "3px" }}
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;
