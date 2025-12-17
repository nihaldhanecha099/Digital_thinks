import React from 'react'
import "./Training.css"
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
const BecomeGraphicDesigner = () => {
  return (
    <div>
      <div className="common-section">
      <h1 className="common-heading">Become Web Developer</h1>

      <p className="common-intro">
        The demand for skilled web developers is growing, and at Digital Thinking, we offer a comprehensive Web Development Training program that equips you with the skills to build professional websites using both CMS like WordPress and custom coding for unique, tailor-made solutions. You’ll gain the ability to create stunning websites and complex web applications for any industry.
      </p>

      <h2 className="common-subheading">What You Will Learn in Our Web Developer Program:</h2>
      <ul className="common-list">
        <li><strong>HTML, CSS, and JavaScript:</strong> Master the foundations of front-end development for responsive websites.</li>
        <li><strong>Front-End Frameworks:</strong> Learn Bootstrap and ReactJS to build mobile-friendly websites efficiently.</li>
        <li><strong>Back-End Development:</strong> Gain expertise in PHP, Node.js, MySQL, and server-side scripting.</li>
        <li><strong>CMS (Content Management Systems):</strong> Work with WordPress, Joomla, and Drupal for CMS-driven websites.</li>
        <li><strong>Custom Web Development (Full Stack):</strong> Build scalable and secure web applications from scratch.</li>
        <li><strong>Web Hosting and Deployment:</strong> Learn hosting setup, server configuration, and deployment strategies.</li>
        <li><strong>Version Control with Git & GitHub:</strong> Collaborate on projects and manage code efficiently.</li>
        <li><strong>SEO for Web Developers:</strong> Create SEO-friendly websites with optimized structure and content.</li>
        <li><strong>Responsive Web Design:</strong> Ensure websites look great on all devices using media queries and flexbox.</li>
      </ul>

      <h2 className="common-subheading">Why Choose Digital Thinking?</h2>
      <ul className="common-list">
        <li><strong>Live Project Training:</strong> Gain hands-on experience by working on real-world projects.</li>
        <li><strong>Experience Letter:</strong> Showcase your contribution to live projects instead of generic certification.</li>
        <li><strong>Real-Time Job Experience:</strong> Build confidence handling real client projects.</li>
        <li><strong>Interview Preparation & Career Guidance:</strong> Resume building, interview techniques, and job application support.</li>
        <li><strong>Comprehensive Curriculum:</strong> Covers both CMS and custom coding for a complete development experience.</li>
        <li><strong>Industry-Experienced Trainers:</strong> Learn from seasoned web developers with practical insights.</li>
        <li><strong>Practical, Hands-On Training:</strong> Apply knowledge through exercises and real projects.</li>
        <li><strong>Timely Support & Mentorship:</strong> Ongoing guidance throughout your training journey.</li>
      </ul>

      <p className="common-conclusion">
        Start your web development career today! Digital Thinking provides the knowledge, hands-on experience, and confidence to help you build professional websites and applications. Contact us today to enroll and take the first step toward becoming a skilled web developer.
      </p>
    </div>
    <div className='whatsap'>
    <WhatsAppButton/></div>
    </div>
  )
}

export default BecomeGraphicDesigner
