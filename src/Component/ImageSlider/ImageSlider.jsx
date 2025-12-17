import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

import img1 from "../../Asse/digital-marketing-with-icons-business-people.jpg";
import img2 from "../../Asse/innovative-futuristic-classroom-students.jpg";
import img3 from "../../Asse/magnifying-glass-with-seo-concepts.jpg";
import img4 from "../../Asse/male-female-graphic-designers-using-graphics-tablet.jpg";
import img5 from "../../Asse/marketing-computer-sign-symbol-concept.jpg";
import img6 from "../../Asse/modern-equipped-computer-lab (1).jpg";

const images = [img1, img2, img3, img4, img5, img6];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="slide"
          className={`slider-img ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
