import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

function Header() {
  const brandName = "Cool Fashion";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>{brandName}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <DropdownMenu />
            </Nav.Item>
            <Nav.Item>
              <Link to="contact" className="navLink">
                Kundservice
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link 2</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form>
            <Form.Control type="search" placeholder="Search" className="me-4" />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
