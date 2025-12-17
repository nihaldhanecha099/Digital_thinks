import React from "react";
import "./Headings.css";

const Headings = ({ value }) => {
  return (
    <div className="heading-wrapper">
      <h1 className="heading-text">{value}</h1>
      <div className="heading-underline"></div>
    </div>
  );
};

export default Headings;
