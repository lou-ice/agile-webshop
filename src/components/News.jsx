import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function News({ product, onAdd, onAddWishlist }) {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    let tempProducts = product.sort(
      (a, b) => a.articlenumber - b.articlenumber
    );
    setLatestProducts(tempProducts.slice(-3).reverse());
  }, [product]);

  return (
    <>
      <div className="d-flex justify-content-center text-uppercase h3 mt-4 mb-3">
        Nyheter
      </div>
      <div className="display-products">
        {latestProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
            onAddWishlist={onAddWishlist}
          />
        ))}
      </div>
    </>
  );
}

export default News;
