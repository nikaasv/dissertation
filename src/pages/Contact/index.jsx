import React from "react";
import "./Contact.css";

const Contact = props => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <div>
      <h4 className="heading-contact"> We'd love to hear from you!</h4>
    </div>
    <div className="input-container">
      <div className="styled-input wide">
        <input type="text" required />
        <label>Name</label>
      </div>
    </div>
    <div className="input-container middle-input-container">
      <div className="styled-input email-input">
        <input type="text" required />
        <label>Email</label>
      </div>
      <div className="styled-input phone-number-input">
        <input type="text" required />
        <label>Phone Number</label>
      </div>
    </div>
    <div className="input-container">
      <div className="styled-input wide">
        <textarea required />
        <label>Message</label>
      </div>
    </div>
    <div className="submit-btn">Send Message</div>
  </div>
);

export default Contact;
