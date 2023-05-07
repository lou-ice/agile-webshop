import Card from "react-bootstrap/Card";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.bild} alt={product.produktnamn} />
        <Card.Body>
          <Card.Title>{product.produktnamn}</Card.Title>
          <Card.Text>{product.kategori}</Card.Text>
          <Card.Text>{product.info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
