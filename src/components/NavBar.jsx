import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar className="navbar-fixed" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MedTek Hayward
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Sterilizer Project" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Gallery">
                About Sterilization
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Steam">
                Steam
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Eo">
                Ethylene Oxide (EO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Ltgp">
                Low-Temp Gas Plasma (LTGP)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Vpro">
                Low-Temp Hydrogen Peroxide (V-PRO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Ozone">
                Hydrogen Peroxide Ozone
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Iuss">
                IUSS
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Dryheat">
                Dry Heat
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/podcast">
              Podcast Report
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
