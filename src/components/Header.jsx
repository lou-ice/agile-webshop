import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

function Header({ kategorier }) {
  const brandName = "Cool Fashion";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              {brandName}
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <DropdownMenu kategorier={kategorier} />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/ContactForm">
                Kundservice
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/adminupload">
                Admin
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/cart">
                Varukorg
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form>
            <Form.Control type="search" placeholder="Sök" className="me-4" />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
