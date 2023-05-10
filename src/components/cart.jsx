import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="cart">
      <fieldset className="border p-4">
        <legend className="float-none w-auto">Varukorg</legend>

        <br />
        <hr />
        <br />
        <div>{cartItems.length === 0 && <div>Varukorgen är tom</div>}</div>
        <br />

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
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
