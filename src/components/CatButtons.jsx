import { Link } from "react-router-dom";
import "../css/CatButtons.css";

function CatButtons({ kategorier }) {
  return (
    <div className="katknapp">
      {kategorier.map((item) => (
        <Link to="productpage" state={{ kategori: item }}>
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
  );
}

export default CatButtons;
