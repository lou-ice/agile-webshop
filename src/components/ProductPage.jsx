import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
//import Dropdown from "rsuite/Dropdown";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductPage({ product, kategorier }) {
  const location = useLocation();

  const [value, setValue] = useState(location?.state?.kategori); //Söksträngen
  /*const onChange = (event) => {
    setValue(event);
  };*/

  useEffect(() => {
    setValue(location?.state?.kategori);
  }, [location.state?.kategori]);

  console.log(location?.state?.kategori);
  console.log(value);
  return (
    <>
      {/*<div className=" m-5">
        <Dropdown size="lg" title={value} onSelect={onChange} activeKey={value}>
          <Dropdown.Item key="all" eventKey={"Se Alla"}>
            Se alla
          </Dropdown.Item>
          {kategorier.map((item) => (
            <Dropdown.Item key={item} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>
          </div>*/}
      <div className="katknapp">
        <Link to="../productpage" state={{ kategori: "Se Alla" }}>
          <button
            type="button"
            className="btn btn-outline-secondary katknapp"
            key={"all"}
          >
            {"Se alla"}
          </button>
        </Link>
        {kategorier.map((item) => (
          <Link to="../productpage" state={{ kategori: item }}>
            <button
              type="button"
              className="btn btn-outline-secondary katknapp"
              key={item}
            >
              {item}
            </button>
          </Link>
        ))}
      </div>

      <div className="d-flex justify-content-center h3 mt-5 mb-3">
        {value !== "Se alla" ? value.toUpperCase() : "ALLA PRODUKTER"}
      </div>
      <div className="display-products">
        {product.map((product) => {
          if (value === "Se alla" || product.kategori.includes(value)) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </>
  );
}

export default ProductPage;
