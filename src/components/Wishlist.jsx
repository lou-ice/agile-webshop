import React from "react";
import { Trash } from "react-bootstrap-icons";
import { Offcanvas } from "react-bootstrap";
import "../css/cart.css";

function Wishlist({
  wishlistItems,
  onRemoveWishlist,
  wishlistQty,
  showWishlist,
  handleCloseWishlist,
}) {
  return (
    <>
      <Offcanvas
        show={showWishlist}
        onHide={handleCloseWishlist}
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Wishlist {wishlistQty > 0 && <span>({wishlistQty})</span>}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {wishlistItems.length === 0 && (
            <div className="empty-cart">Inga favoriter sparade än!</div>
          )}

          {wishlistItems.map((item) => (
            <div className="cart-product" key={item.articlenumber}>
              <img
                src={item.bild}
                alt={item.produktnamn}
                className="img-fluid"
                width="80px"
              />
              <div className="cart-info">
                <span className="product-name">{item.produktnamn}</span>
              </div>
              <div className="remove-product">
                <button
                  className="btn btn-light px-2 py-1"
                  onClick={() => onRemoveWishlist(item)}
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Wishlist;
