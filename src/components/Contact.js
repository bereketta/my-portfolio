import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Have a project in mind or just want to say hello?</p>
        <p>
          I’d love to hear from you! Feel free to reach out by filling out the
          form below or through my social media.
        </p>
      </div>

      <div className="contact-content">
        {/* Left side - Get in Touch */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out by filling the form or through social media:</p>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <strong>Address</strong>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <strong>Phone number</strong>
              <p>+251923713895</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <strong>E-Mail</strong>
              <p>berekettamiru13@gmail.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right side - Send a Message */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>E-mail Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your E-mail address"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              required
            ></textarea>

            <p className="privacy">
              By submitting you agree to the processing of your personal data.
            </p>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
