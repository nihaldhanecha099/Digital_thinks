import React from "react";
import styles from "./Footer.module.css"; // Use CSS Modules

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3>Services</h3>
          <ul className={styles.list}>
            <li><a href="/digital-marketing">Digital Marketing</a></li>
            <li><a href="/website-designing">Website Designing</a></li>
            <li><a href="/graphic-designing">Graphic Designing</a></li>
            <li><a href="/appdevlopment">App Development</a></li>
            <li><a href="/seo">SEO</a></li>
            <li><a href="/emailmarketing">Email Marketing</a></li>
            <li><a href="/googleads">Google ADS</a></li>
            <li><a href="/pcc">PCC</a></li>
            <li><a href="/socialmediamarketing">Social Media Marketing</a></li>
            <li><a href="/influencermarketing">Influencer Marketing</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Training</h3>
          <ul className={styles.list}>
            <li><a href="/fulldigitalmarketing">Full Digital Marketing</a></li>
            <li><a href="/becomewebdeveloper">Become Web Developer</a></li>
            <li><a href="/searchengineoptimization">SEO</a></li>
            <li><a href="/becomegraphicdesigner">Become Graphic Designer</a></li>
            <li><a href="/becomeappdeveloper">Become App Developer</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p>📞 +91 8962644037</p>
          <p>✉ info@digitalthinkings.com</p>
          <p>🏠 10 Moti Bungalow, Dewas 455001, MP</p>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
