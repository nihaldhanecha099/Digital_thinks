import React from "react";
import { Link } from "react-router-dom";
import "./HowWeHepl.css";

import img1 from "../../src/Asse/img1_digitalmarketing.jpg";
import img2 from "../../src/Asse/img2_web.jpg";
import img3 from "../../src/Asse/img3_graphic.avif";
import img4 from "../../src/Asse/img4-shopify-migration.avif";

const HowWeHepl = () => {
  const services = [
    { img: img1, title: "Digital Marketing", link: "/digital-marketing" },
    { img: img2, title: "Website Designing", link: "/website-designing" },
    { img: img3, title: "Graphic Designing", link: "/graphic-designing" },
    { img: img4, title: "Store Migration", link: "/store-migration" },
  ];

  return (
    <div className="how-we-help-container">
      {services.map((service, index) => (
        <Link to={service.link} key={index} className="how-we-help-card">
          <img src={service.img} alt={service.title} />
          <h3>{service.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default HowWeHepl;
