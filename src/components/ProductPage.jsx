import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductPage({
  product,
  kategorier,
  onAdd,
  onRemove,
  cartItems,
  onAddWishlist,
  onRemoveWishlist,
  wishlistItems,
}) {
  const location = useLocation();
  const { searchResult } = location.state;

  const [value, setValue] = useState(location?.state?.kategori);

  useEffect(() => {
    setValue(location?.state?.kategori);
  }, [location.state?.kategori]);

  return (
    <>
      <div className="katknapp">
        <Link to="../productpage" state={{ kategori: "Se alla" }}>
          <button
            type="button"
            className="btn btn-outline-secondary katknapp"
            key={"all"}
          >
            {"Se alla"}
          </button>
        </Link>
        {kategorier.map((item) => (
          <Link to="../productpage" key={item} state={{ kategori: item }}>
            <button
              type="button"
              className="btn btn-outline-secondary katknapp"
            >
              {item}
            </button>
          </Link>
        ))}
      </div>
      <div className="d-flex justify-content-center h3 mt-5 mb-3">
        {value !== "Se alla" ? value?.toUpperCase() : "ALLA PRODUKTER"}
      </div>
      <div className="display-products">
        {searchResult
          ? searchResult.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  onAddWishlist={onAddWishlist}
                />
              );
            })
          : product.map((product) => {
              if (value === "Se alla" || product.kategori.includes(value)) {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    item={cartItems.find(
                      (x) => x.articlenumber === product.articlenumber
                    )}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    itemWishlist={wishlistItems.find(
                      (x) => x.articlenumber === product.articlenumber
                    )}
                    onAddWishlist={onAddWishlist}
                    onRemoveWishlist={onRemoveWishlist}
                  />
                );
              }
            })}
      </div>
    </>
  );
}

export default ProductPage;
