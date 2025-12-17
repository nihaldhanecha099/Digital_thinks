import React from 'react'
import "./Training.css"
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
const BecomeWebDeveloper = () => {
  return (
    <div>
      <div className="common-section">
      <h1 className="common-heading">Become a Web Developer</h1>
      <p className="common-intro">
        The demand for skilled web developers is growing, and at Digital Thinking, we offer a comprehensive Web Development Training program that equips you to build professional websites using CMS like WordPress, Joomla, or custom coding for unique solutions.
      </p>

      <h2 className="common-subheading">What You Will Learn</h2>
      <ul className="common-list">
        <li><strong>HTML, CSS, JavaScript:</strong> Build structured, styled, and interactive websites.</li>
        <li><strong>Front-End Frameworks:</strong> Learn Bootstrap and ReactJS for responsive websites.</li>
        <li><strong>Back-End Development:</strong> PHP, Node.js, MySQL, server-side scripting.</li>
        <li><strong>CMS (WordPress, Joomla, Drupal):</strong> Create, customize, and manage CMS websites.</li>
        <li><strong>Custom Web Development (Full Stack):</strong> Build scalable, secure websites from scratch.</li>
        <li><strong>Web Hosting & Deployment:</strong> Configure websites on live servers with secure hosting.</li>
        <li><strong>Version Control:</strong> Use Git & GitHub for collaboration and version management.</li>
        <li><strong>SEO for Developers:</strong> Make SEO-friendly websites for better search rankings.</li>
        <li><strong>Responsive Web Design:</strong> Ensure websites look great on desktops and mobile devices.</li>
      </ul>

      <h2 className="common-subheading">Why Choose Digital Thinking?</h2>
      <ul className="common-list">
        <li><strong>Live Project Training:</strong> Work on real-world projects for hands-on experience.</li>
        <li><strong>Experience Letter:</strong> Showcase your contribution to projects instead of generic certificates.</li>
        <li><strong>Real-Time Job Experience:</strong> Gain confidence and job-ready skills.</li>
        <li><strong>Interview Preparation & Career Guidance:</strong> Resume tips, interview prep, and job application guidance.</li>
        <li><strong>Flexible Learning Options:</strong> Online and in-person classes to learn at your pace.</li>
      </ul>

      <p className="common-conclusion">
        Web development is an exciting and rewarding field. Ready to launch your web development career? Contact us today to enroll in our program and start learning the skills that will shape your future as a professional developer!
      </p>
    </div>
    <div className='whatsap'>
    <WhatsAppButton/></div>
    </div>
  )
}

export default BecomeWebDeveloper
