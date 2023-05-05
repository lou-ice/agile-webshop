import React, { useEffect, useState } from "react";
import classes from "../css/Hero.module.css";

const Hero = (props) => {
  let [image, setImage] = useState(null);
  // console.log(image);

  /**
   * Fetch data from API and update image state
   */
  useEffect(() => {
    let getImage = () => {
      fetch(
        "https://api.unsplash.com/photos/SmIlY2uAHo8?client_id=3YYcfmOi4qZDWlyZtbQj4hmzpQdjWpxW0axvYlp4RBU"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImage(data.urls.regular);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };
    getImage();
  }, []);

  return (
    <div className={classes.hero}>
      <div className={classes["main-image"]}>
        {image && <img src={image} alt=""></img>}
      </div>
    </div>
  );
};

export default Hero;
