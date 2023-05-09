import { Link } from "react-router-dom";
import "../css/CatButtons.css";

function CatButtons({ kategorier }) {
  return (
    <div className="katknapp">
      {kategorier.map((item) => (
        <button
          type="button"
          className="btn btn-outline-secondary katknapp"
          key={item}
        >
          <Link to="productpage" state={{ kategori: item }}>
            {item}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default CatButtons;
