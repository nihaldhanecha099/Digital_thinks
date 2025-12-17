import React from 'react'
import img1 from "../Asse/FDM1.webp"
import img2 from "../Asse/BD2.webp"
import img3 from "../Asse/SEO3.webp"
import { Link } from 'react-router-dom'
import "./GrowStutdent.css"
const GrowStudent = () => {
  const services = [
    { img: img1, title: "Become Developer", link: "/become-dev" },
    { img: img2, title: "Full Digital Marketing", link: "/full-digital" },
    { img: img3, title: "Search Engine Optimization", link: "/seo" }
  ];

  return (
    <div className="grow-student-container">
      {services.map((item, index) => (
        <Link to={item.link} key={index} className="grow-student-card">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default GrowStudent;
