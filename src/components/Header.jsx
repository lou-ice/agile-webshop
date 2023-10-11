import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./Search";
import { Link } from "react-router-dom";
import { Basket, SuitHeart } from "react-bootstrap-icons";

function Header({
  kategorier,
  product,
  cartQty,
  setShowCart,
  setShowWishlist,
}) {
  const brandName = "Cool Fashion";

  return (
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
        <SearchBar product={product} />
      </Container>
      <Nav.Item>
        <div className="d-flex">
          <button
            className="px-4 d-flex position-relative cart-btn"
            onClick={() => setShowWishlist(true)}
          >
            <SuitHeart className="icon" />
          </button>
          <button
            className="px-4 d-flex position-relative cart-btn"
            onClick={() => setShowCart(true)}
          >
            <Basket className="icon" />
            {cartQty > 0 && <div className="cart-quantity">{cartQty}</div>}
          </button>
        </div>
      </Nav.Item>
    </Navbar>
  );
}

export default Header;
