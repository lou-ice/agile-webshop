import ProductCard from "./ProductCard";

function ProductPage(props) {
  const { product } = props;
  return (
    <div className="grid">
      {product.map((product) => {
        return <ProductCard product={product}></ProductCard>;
      })}
    </div>
  );
}

export default ProductPage;
