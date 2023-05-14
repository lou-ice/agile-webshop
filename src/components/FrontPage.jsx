import Hero from "./Hero";
import News from "./News";
import CatButtons from "./CatButtons";

function FrontPage({ product, kategorier, onAdd, onAddWishlist }) {
  return (
    <>
      <Hero />
      <CatButtons kategorier={kategorier} />
      <News product={product} onAdd={onAdd} onAddWishlist={onAddWishlist} />
    </>
  );
}

export default FrontPage;
