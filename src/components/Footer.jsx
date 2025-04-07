import React, { useState } from 'react';
import "./css/Footer.css";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.subject || !formData.email || !formData.message) {
      setFormStatus('All fields are required.');
      return;
    }

    // Simulate form submission (for now)
    // You can later connect to a backend or an email service here
    console.log('Form Submitted:', formData);
    setFormStatus('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ subject: '', email: '', message: '' }); // Clear the form fields
  };

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
                    <form onSubmit={handleFormSubmit}>
                      <h4>Subject</h4>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                      <h4>Your Email</h4>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <h4>Message</h4>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea><br/>
                      <button type="submit">Submit Form</button>
                    </form><br/>
                    {formStatus && <p>{formStatus}</p>} {/* Display status message */}
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="footerblank"></div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
