import Card from "react-bootstrap/Card";
import "../css/ProductCard.css";
import { useState } from "react";

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <Card
      style={{
        cursor: "pointer",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.4s",
        opacity: hover ? 0.6 : 1,
      }}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <Card.Img variant="top" src={product.bild} alt={product.produktnamn} />
      <Card.Body>
        <Card.Title>{product.produktnamn}</Card.Title>
        <Card.Text>{product.kategori}</Card.Text>
        <Card.Text>{product.info}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
