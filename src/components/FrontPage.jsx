import Hero from "./Hero";
import News from "./News";

function FrontPage({ product }) {
  return (
    <div>
      <Hero />
      <News product={product} />
    </div>
  );
}

export default FrontPage;
