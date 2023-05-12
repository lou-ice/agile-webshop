import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import SearchBar from "./Search";
import { Basket, SuitHeart } from "react-bootstrap-icons";

function Header({ kategorier, product, cartQty }) {
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
          </Nav>
          <SearchBar product={product}/>
        </Container>
        <Nav.Item>
        <div className="d-flex">
          <Nav.Link as={Link} to="/" className="px-2">
            <SuitHeart className="icon" />
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/cart"
            className="px-4 d-flex position-relative"
          >
            <Basket className="icon" />
            {cartQty > 0 && <div className="basketQuantity">{cartQty}</div>}
          </Nav.Link>
        </div>
      </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Header;
