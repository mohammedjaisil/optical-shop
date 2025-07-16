import React from 'react';
import Footer from "../components/Footer";

function About() {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const highlightStyle = {
    color: '#e67e22',
    fontWeight: 'bold',
  };

  return (
    <>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to <span style={highlightStyle}>SunVision Eyewear</span>, your number one destination for stylish,
          affordable, and high-quality sunglasses. We're passionate about helping you see better and look great while doing it.
        </p>
        <p style={paragraphStyle}>
          Founded in 2020, our team is dedicated to sourcing eco-friendly frames, offering custom prescription options, and making eyewear fun and accessible.
        </p>
        <p style={paragraphStyle}>
          Our mission is to deliver products that combine fashion, functionality, and sustainability. Whether you’re shielding your eyes from the sun or upgrading your look, we’ve got you covered.
        </p>
      </div>

      {/* Footer rendered outside the constrained container */}
      <Footer />
    </>
  );
}

export default About;
