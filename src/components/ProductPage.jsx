import ProductCard from "./ProductCard";

import React, { useState } from "react";

function ProductPage({ product }) {
  const [value, setValue] = useState(""); //Söksträngen
  const onChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <>
      <select
        type="text"
        className="form-control rounded"
        placeholder="Kategorier"
        value={value}
        onChange={onChange}
      >
        <option value="Tröja">Tröjor</option>
        <option value="Byxa">Byxor</option>
      </select>

      <div className="d-flex justify-content-center h3 mt-5">Produkter</div>
      <div className="display-products">
        {product.map((product, i) => {
          if (product.kategori.includes(value)) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </>
  );
}

export default ProductPage;
