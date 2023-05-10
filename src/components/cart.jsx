import React from "react";
import { Trash } from "react-bootstrap-icons";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="cart">
      <fieldset className="border p-4">
        <legend className="float-none w-auto">Varukorg</legend>

        <div>{cartItems.length === 0 && <div>Varukorgen är tom</div>}</div>

        <div>
          {cartItems.map((item) => (
            <div key={item.articlenumber}>
              <div className="flex">
                <div>
                  <img
                    className="cartImage"
                    src={item.bild}
                    width="100px"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <strong>{item.produktnamn}</strong>
                  </div>{" "}
                  <div>
                    <div>{item.qty}</div>
                    <button
                      className="btn btn-success btn-send  pt-2 btn-block"
                      onClick={() => onAdd(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemove(item)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default Cart;
