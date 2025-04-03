import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav className="me-auto text-white">
              <Nav.Link className="text-white" href="/users">
                Users
              </Nav.Link>
              <Nav.Link className="text-white" href="/about-us">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavbarComponents;
