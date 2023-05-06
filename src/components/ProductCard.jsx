import Card from "react-bootstrap/Card";
import "../css/ProductCard.css";

function ProductCard({ category, productName, productInfo, productImage }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={productImage} alt={productName} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{productInfo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
