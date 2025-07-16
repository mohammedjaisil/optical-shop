import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const topBarStyle = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "14px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    textAlign: isMobile ? "center" : "left",
  };

  const leftStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: "center",
  };

  // Hide the address div on mobile
  const rightStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: "center",
  };

  return (
    <div>
      {/* Top Info Bar */}
      <div style={topBarStyle}>
        <div style={leftStyle}>
          
        </div>
        <div style={rightStyle}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
          <FaEnvelope />
          <span>neoocular@example.com</span>
        </div>
      </div>

      {/* Main Header */}
      <Header />

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
