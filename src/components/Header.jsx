import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import SearchBar from "./Search";

function Header({ kategorier, product }) {
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
              <Nav.Link href="/ContactForm">Kundservice</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/adminupload">Admin</Nav.Link>
            </Nav.Item>
          </Nav>
          <SearchBar product={product}/>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
