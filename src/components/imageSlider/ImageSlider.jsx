import React, { useState, useEffect } from "react";
import logoImage1 from "../../assets/images/img1.jpg";
import logoImage2 from "../../assets/images/img2.jpg";
import logoImage3 from "../../assets/images/img3.jpg";
import logoImage4 from "../../assets/images/img4.jpg";
import Countdown from "../coutdown/Coutdown";
import "./imageSlider.style.scss";

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [logoImage1, logoImage2, logoImage3, logoImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      <div className="container__background1">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <div className="container__background1__text"></div>
      </div>

      <div className="container__content">
        <p>Left until the race:</p>
        <Countdown />
      </div>
    </div>
  );
}

export default ImageSlider;
