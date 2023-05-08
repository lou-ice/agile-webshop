import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function News({ product }) {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    let tempProducts = product.sort(
      (a, b) => a.articlenumber - b.articlenumber
    );
    setLatestProducts(tempProducts.slice(-3));
  }, [product]);
  return (
    <>
      <div className="d-flex justify-content-center h3 mt-4">Nyheter</div>
      <div className="display-products">
        {latestProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default News;
