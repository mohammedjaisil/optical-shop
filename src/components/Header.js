import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Close menu if resizing wider than mobile breakpoint
    if (windowWidth >= 768 && menuOpen) {
      setMenuOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, menuOpen]);

  const isMobile = windowWidth < 768;

  const containerStyle = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    flexWrap: "nowrap",
  };

  const logoStyle = {
    fontSize: "28px",
    fontWeight: "bold",
  };

  const hamburgerStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "black",
  };

  const menuStyle = {
    position: "absolute",
    top: "60px", // below header
    right: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 1000,
    width: "200px",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "15px",
  };

  const iconsStyle = {
    display: "flex",
    gap: "15px",
    justifyContent: "flex-start",
    padding: "0 15px 15px 15px",
    borderTop: "1px solid #eee",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };

  // Desktop styles: nav + icons inline
  const desktopNavStyle = {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  };

  const desktopIconsStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={logoStyle}>
        N E O
        <br />
        <span style={{ fontSize: "12px" }}>OCULAR</span>
      </div>

      {isMobile ? (
        <>
          {/* Hamburger icon */}
          <div onClick={() => setMenuOpen((prev) => !prev)} style={hamburgerStyle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Dropdown menu */}
          {menuOpen && (
            <div style={menuStyle}>
              <nav style={navStyle}>
                <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  HOME
                </Link>
                <Link to="/products" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  PRODUCTS
                </Link>
                <Link to="/newarrivals" style={linkStyle} onClick={() => setMenuOpen(false)}>
                NEW ARRAIVALS
                </Link>
                <Link to="/about" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  ABOUT
                </Link>
                <Link to="/contact" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  CONTACT
                </Link>
              </nav>
              <div style={iconsStyle}>
                <FaSearch />
                <FaHeart />
                <FaUser />
                <FaShoppingBag />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <nav style={desktopNavStyle}>
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
            <Link to="/products" style={linkStyle}>
              PRODUCTS
            </Link>
            <Link to="/newarrivals" style={linkStyle}>
              NEW ARRAIVALS
            </Link>
            <Link to="/about" style={linkStyle}>
              ABOUT
            </Link>
            <Link to="/contact" style={linkStyle}>
              CONTACT
            </Link>
          </nav>
          <div style={desktopIconsStyle}>
            <FaSearch />
            <FaHeart />
            <FaUser />
            <FaShoppingBag />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
