import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";
import React, { useEffect, useState } from "react";

function ProductPage({ product, kategorier }) {
  const location = useLocation();

  const [value, setValue] = useState(location?.state?.kategori); //Söksträngen
  const onChange = (event) => {
    setValue(event);
  };

  useEffect(() => {
    setValue(location?.state?.kategori);
  }, [location.state?.kategori]);

  console.log(location?.state?.kategori);
  console.log(value);
  return (
    <>
      <div className=" m-5">
        <Dropdown size="lg" title={value} onSelect={onChange} activeKey={value}>
          {kategorier.map((item) => (
            <Dropdown.Item key={item} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>

      <div className="d-flex justify-content-center h3 mt-5">
        {value?.toUpperCase()}
      </div>
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
