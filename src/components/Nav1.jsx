import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

function Nav1() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>

        <Navbar.Brand as={Link} to="/">
          Book Explorer
        </Navbar.Brand>

        <Nav className="me-auto">

          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/books">
            Books
          </Nav.Link>

        </Nav>

      </Container>
    </Navbar>
  );
}

export default Nav1;