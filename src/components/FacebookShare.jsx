import { Facebook } from "react-bootstrap-icons";
import { FacebookShareButton } from "react-share";

function FaceBookShare({ product }) {
  return (
    <FacebookShareButton
      url={product.bild}
      quote={product.produktnamn}
      hashtag={"#coolfashion"}
      description={product.info}
      className="Demo__some-network__share-button"
    >
      <Facebook />
    </FacebookShareButton>
  );
}

export default FaceBookShare;
