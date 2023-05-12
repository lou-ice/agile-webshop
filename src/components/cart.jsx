import React from "react";
import { Trash } from "react-bootstrap-icons";
import { Offcanvas } from "react-bootstrap";
import "../css/cart.css";

function Cart({
  cartItems,
  setCartItems,
  onRemove,
  cartQty,
  showCart,
  handleClose,
}) {
  const changeQuantity = (item, value) => {
    item.qty += value;
    setCartItems([...cartItems]);
    if (item.qty === 0) {
      onRemove(item);
    }
  };

  return (
    <>
      <Offcanvas show={showCart} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Varukorg {cartQty > 0 && <span>({cartQty})</span>}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 && (
            <div className="empty-cart">Här var det tomt!</div>
          )}

          {cartItems.map((item) => (
            <div className="cart-product" key={item.articlenumber}>
              <img
                src={item.bild}
                alt={item.produktnamn}
                className="img-fluid"
                width="80px"
              />
              <div className="cart-info">
                <span className="product-name">{item.produktnamn}</span>
                <div className="change-quantity">
                  <button
                    className="quantity-counter"
                    onClick={() => changeQuantity(item, -1)}
                  >
                    -
                  </button>
                  <span className="product-quantity">{item.qty}</span>
                  <button
                    className="quantity-counter"
                    onClick={() => changeQuantity(item, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="remove-product">
                <button
                  className="btn btn-light px-2 py-1"
                  onClick={() => onRemove(item)}
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            {cartItems.length > 0 && (
              <button className="btn btn-dark py-2 mt-3">Checkout</button>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
