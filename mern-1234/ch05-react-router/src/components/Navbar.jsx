import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

function NavbarComponents() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container className="d-flex justify-content-between ">
        <div>
          <Navbar.Brand className="text-white fw-bold" href="/">
            React-Bootstrap
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white gap-5">
              <Link className="text-white text-decoration-none" to="/users">
                Users
              </Link>
              <Link className="text-white text-decoration-none"  to="/about-us">
                About Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavbarComponents;
