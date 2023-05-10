import { Link } from "react-router-dom";
import "../css/CatButtons.css";

function CatButtons({ kategorier }) {
  return (
    <div className="katknapp">
      <Link to="../productpage" state={{ kategori: "Se alla" }}>
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
  );
}

export default CatButtons;
