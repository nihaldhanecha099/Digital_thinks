import React from "react";
import { Link } from "react-router-dom";
import "./Blogss.css";

const Blogss = () => {
  return (
    <div className="blog_container">
      <div className="blog_name">
        <h2>Get Trained to Make a Career in the IT Field</h2>
        <Link to="/blog-detail-1">Read More</Link>
      </div>

      <div className="blog_name">
        <h2>Website Development and App Development</h2>
        <Link to="/blog-detail-2">Read More</Link>
      </div>

      <div className="blog_name">
        <h2>Conversion Rate Optimization (CRO)</h2>
        <Link to="/blog-detail-3">Read More</Link>
      </div>

      <div className="blog_name">
        <h2>Digital Marketing</h2>
        <Link to="/blog-detail-4">Read More</Link>
      </div>
    </div>
  );
};

export default Blogss;
