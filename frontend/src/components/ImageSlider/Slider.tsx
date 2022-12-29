import React from "react";
import image1 from "assets/image.jpg";
import image2 from "assets/image.jpg";
import image3 from "assets/image.jpg";
import image4 from "assets/image.jpg";
import image5 from "assets/image.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <div id="slider">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1">
          <img
            src={image1}
            alt="artwork"
            height="100%"
            width="100%"
            className="sliderImg"
          />
        </label>
        <label htmlFor="s2" id="slide2">
          <img
            src={image2}
            alt="artwork"
            height="100%"
            width="100%"
            className="sliderImg"
          />
        </label>
        <label htmlFor="s3" id="slide3">
          <img
            src={image5}
            alt="artwork"
            height="100%"
            width="100%"
            className="sliderImg"
          />
        </label>
        <label htmlFor="s4" id="slide4">
          <img
            src={image4}
            alt="artwork"
            height="100%"
            width="100%"
            className="sliderImg"
          />
        </label>
        <label htmlFor="s5" id="slide5">
          <img
            src={image3}
            alt="artwork"
            height="100%"
            width="100%"
            className="sliderImg"
          />
        </label>
      </div>
    </div>
  );
};

export default Slider;
