import React, { useState } from 'react';

import "./css/Footer.css";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer>
      <div className="flex-container">
        <section className="footerleft">
          <div className="flex-container">
            <section>
              <div className="footercopy">
                <p>&copy; Collin Floyd / Dacrafter1</p>
              </div>
            </section>
            <section>
              <div className="footerContact">
                <button className="contactbtn" onClick={() => setContactOpen(!contactOpen)}>
              Contact Us
            </button>
            {contactOpen && (
              <div className="dropdown">
                <form method="POST">
                  <h4>Subject</h4>
                  <input type="text" name="subject" required />
                  <h4>Your Email</h4>
                  <input type="email" name="email" required />
                  <h4>Message</h4>
                  <textarea name="message" required></textarea>
                  <button type="submit">Submit Form</button>
                </form>
              </div>
              )}
              </div>
            </section>
          </div>
        </section>
        <section>
          <div class="footerblank"></div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
