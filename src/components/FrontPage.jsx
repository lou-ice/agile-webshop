import Hero from "./Hero";
import News from "./News";
import CatButtons from "./CatButtons";

function FrontPage({ product, kategorier }) {
  return (
    <div>
      <Hero />
      <CatButtons kategorier={kategorier} />
      <News product={product} />
    </div>
  );
}

export default FrontPage;
