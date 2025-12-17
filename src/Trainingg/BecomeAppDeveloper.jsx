import React from 'react'
import "./Training.css"
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
const BecomeAppDeveloper = () => {
  return (
    <div>
       <div className="common-section">
      <h1 className="common-heading">Become an App Developer</h1>
      <p className="common-intro">
        In the ever-evolving world of technology, mobile applications have become an integral part of how businesses engage with users, deliver services, and grow their brand. Digital Thinking offers a comprehensive App Development Training Program to help you become a skilled developer.
      </p>

      <h2 className="common-subheading">What You Will Learn</h2>
      <ul className="common-list">
        <li><strong>Introduction to Mobile App Development:</strong> Overview of native vs hybrid apps.</li>
        <li><strong>iOS App Development (Swift & Xcode):</strong> Build apps for iPhone & iPad.</li>
        <li><strong>Android App Development (Java & Kotlin):</strong> Create apps for all Android devices.</li>
        <li><strong>Cross-Platform Development:</strong> Flutter & React Native for both iOS & Android.</li>
        <li><strong>App UI/UX Design:</strong> Design intuitive and visually appealing interfaces.</li>
        <li><strong>Databases & Backend:</strong> Integrate Firebase, MySQL, MongoDB, and REST APIs.</li>
        <li><strong>App Monetization Strategies:</strong> In-app purchases, ads, and subscriptions.</li>
        <li><strong>App Deployment & Maintenance:</strong> Publish to App Store & Google Play and maintain your app.</li>
        <li><strong>App Security:</strong> Protect user data, encryption, and prevent vulnerabilities.</li>
        <li><strong>App Testing:</strong> Manual & automated testing for bug-free apps.</li>
      </ul>

      <h2 className="common-subheading">Why Choose Digital Thinking?</h2>
      <ul className="common-list">
        <li><strong>Live Project Training:</strong> Work on real-world mobile app projects.</li>
        <li><strong>Experience Letter:</strong> Showcase real contribution instead of generic certificates.</li>
        <li><strong>Real-Time Job Experience:</strong> Hands-on experience for job readiness.</li>
        <li><strong>Interview Preparation & Career Guidance:</strong> Resume building & interview training.</li>
        <li><strong>Flexible Learning Options:</strong> Online & in-person classes at your pace.</li>
      </ul>

      <p className="common-conclusion">
        Mobile app development is one of the most in-demand skills today. Ready to build the next big app? Contact us today to enroll in our App Development Training Program and take the first step toward becoming a professional app developer!
      </p>
    </div>
    <div className='whatsap'>
    <WhatsAppButton/></div>
    </div>
  )
}

export default BecomeAppDeveloper
