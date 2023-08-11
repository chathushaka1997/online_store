import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container mt-4 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      <div className=" d-flex justify-content-center">
        <div>
          <div className="text-center mb-5">
            <h3 className="" style={{ color: "#3498db" }}>
              Contact Us
            </h3>
            <p>We'd love to hear from you!</p>
          </div>

          <div style={{ maxWidth: "700px" }} className="row">
            <div className="col-6 border p-5">
              <div className="contact-info">
                <div className="contact-detail">
                  <h4>Customer Service</h4>
                  <p>If you have any questions or need assistance, our customer support team is here to help.</p>
                  <p>
                    Email: <a href="mailto:info@stylishwardrobe.com">info@stylishwardrobe.com</a>
                  </p>
                  <p>Phone: +1-123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="col-6 border p-5">
              <div className="contact-detail">
                <h4>Visit Our Store</h4>
                <p>Come visit our physical store to explore our collection in person.</p>
                <p>Address: 123 Fashion Avenue, Cityville</p>
                <p>Opening Hours: Monday to Saturday, 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* 
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit">Send</button>
          </form>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
