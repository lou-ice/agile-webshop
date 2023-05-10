import Hero from "./Hero";
import News from "./News";
import CatButtons from "./CatButtons";

function FrontPage({ product, kategorier, onAdd }) {
  return (
    <>
      <Hero />
      <CatButtons kategorier={kategorier} />
      <News product={product} onAdd={onAdd} />
    </>
  );
}

export default FrontPage;
