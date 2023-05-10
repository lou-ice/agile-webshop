import Hero from "./Hero";
import News from "./News";
import CatButtons from "./CatButtons";

function FrontPage({ product, kategorier }) {
  return (
    <>
      <Hero />
      <CatButtons kategorier={kategorier} />
      <News product={product} />
    </>
  );
}

export default FrontPage;
