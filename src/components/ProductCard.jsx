import Card from "react-bootstrap/Card";
import "../css/ProductCard.css";
import { useState } from "react";

function ProductCard({ product, onAdd }) {
  const [hover, setHover] = useState(false);
  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <Card>
      <div className="zoom-effect d-flex">
        <Card.Img
          style={{
            cursor: "pointer",
            transform: hover ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s",
            opacity: hover ? 0.6 : 1,
          }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          variant="top"
          src={product.bild}
          alt={product.produktnamn}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.produktnamn}</Card.Title>
        <Card.Text>{product.kategori}</Card.Text>
        <Card.Text className="mb-4">{product.info}</Card.Text>
        <button className="btn btn-dark mt-auto" onClick={() => onAdd(product)}>
          Köp
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
