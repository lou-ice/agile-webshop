import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

function FaceBookShare({ product }) {
  return (
    <>
      <FacebookShareButton
        url={product.bild}
        quote={product.produktnamn}
        hashtag={"#coolfashion"}
        description={product.info}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
        Share on Facebook
      </FacebookShareButton>
    </>
  );
}

export default FaceBookShare;
