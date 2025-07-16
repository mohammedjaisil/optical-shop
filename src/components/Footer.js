const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: "#222",
          color: "#ccc",
          padding: "40px 20px",
          fontFamily: "sans-serif",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {/* About / Logo */}
          <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
            <h3 style={{ color: "#fff", marginBottom: "15px" }}>Albirr Optical</h3>
            <p style={{ lineHeight: "1.6", color: "#aaa" }}>
              Your trusted source for premium eyewear styles and quality service.
            </p>
          </div>
  
          {/* Quick Links */}
          <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
            <h4 style={{ color: "#fff", marginBottom: "15px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa" }}>
              {["Home", "Shop", "About Us", "Contact", "FAQ"].map((link) => (
                <li key={link} style={{ marginBottom: "10px", cursor: "pointer" }}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Contact Info */}
          <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
            <h4 style={{ color: "#fff", marginBottom: "15px" }}>Contact Us</h4>
            <p style={{ color: "#aaa", marginBottom: "8px" }}>📍 123 Optical St, Dubai</p>
            <p style={{ color: "#aaa", marginBottom: "8px" }}>📞 +971 123 456 789</p>
            <p style={{ color: "#aaa" }}>✉️ support@albirroptical.com</p>
          </div>
  
          {/* Social Media */}
          <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
            <h4 style={{ color: "#fff", marginBottom: "15px" }}>Follow Us</h4>
            <div style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                👍
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                🐦
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                📸
              </a>
            </div>
          </div>
        </div>
  
        <div
          style={{
            textAlign: "center",
            color: "#555",
            marginTop: "30px",
            fontSize: "14px",
          }}
        >
          &copy; {new Date().getFullYear()} Albirr Optical. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  