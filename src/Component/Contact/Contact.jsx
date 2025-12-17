import React from 'react'
import "./Contact.css"
import WhatsAppButton from '../../WhatsAppButton/WhatsAppButton'
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions about our
        services, want to know more about our training programs, or need
        assistance, we’re here to help.
      </p>
      <p>
        Feel free to reach out to us via the contact form below, or use the
        contact details provided to get in touch directly.
      </p>
      <div><WhatsAppButton/></div>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

       

        <div className="contact-details">
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> info@digitalthinking.com</p>
          <p><strong>Phone:</strong> +91 9575 417700</p>
          <p><strong>Address:</strong> Indore </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
