import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBBtn } from "mdb-react-ui-kit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="nav justify-content-between"
            style={{ width: "100%" }}
          >
            <Navbar.Brand className="fw-bolder">JURIDENT</Navbar.Brand>
            <Nav.Link className="text text-dark fw-bold" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="text text-dark fw-bold" href="#blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="text text-dark fw-bold" href="#news">
              News
            </Nav.Link>
            <Nav.Link className="text text-dark fw-bold" href="#contact">
              About Us
            </Nav.Link>
            <MDBBtn size="sm" outline className="mx-2" color="dark">
              Login
            </MDBBtn>
            <MDBBtn size="sm" outline className="mx-2" color="dark">
              Register
            </MDBBtn>
            <NotificationsNoneIcon className="mt-2"></NotificationsNoneIcon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
