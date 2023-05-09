import React, { useEffect, useState } from "react";
import classes from "../css/Hero.module.css";

const Hero = () => {
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
    <div>
      <div className="center">
        <fieldset className="border p-5">
          <legend className="float-none w-auto">Någon text</legend>
          <h1>Någon text</h1>
          <br />
          <button className="btn btn-dark">Call to action</button>
        </fieldset>
      </div>

      <div className={classes.hero}>
        <div className={classes["main-image"]}>
          {image && <img className="image" src={image} alt=""></img>}
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
