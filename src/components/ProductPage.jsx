import ProductCard from "./ProductCard";

function ProductPage({ product }) {
  return (
    <>
      <div className="d-flex justify-content-center h3 mt-5">Produkter</div>
      <div className="display-products">
        {product.map((product, i) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductPage;
