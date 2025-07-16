import React from 'react';
import Footer from "../components/Footer";
function Contact() {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <>
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" rows="5" style={inputStyle} required></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
      <Footer />
      </>
  );
}

export default Contact;
