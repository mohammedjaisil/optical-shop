import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  // Hero slider settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: !isMobile, // hide arrows on mobile for cleaner look
  };

  // Cards for hero slider — using the two images you had
  const heroSlides = [
    {
      title: "A VARIETY OF STYLES",
      subtitle: "Find the best possible match for you",
      buttonText: "VIEW MORE",
      backgroundImage: "/images/b1.jpg",
      buttonColor: "#f5376c",
      textColor: "#fff",
      buttonBorder: "none",
    },
    {
      title: "Explore Our Exclusive Collection",
      subtitle: "Shop the latest frames today",
      buttonText: "SHOP NOW",
      backgroundImage: "/images/b2.jpg",
      buttonColor: "#f5376c",
      textColor: "#fff",
      buttonBorder: "none",
    },
  ];

  // Carousel settings for trending frames (unchanged)
  const trendingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const cards = [
    {  img: "/images/g1.jpg" },
    {  img: "/images/g2.jpg" },
    {  img: "/images/g3.jpg" },
    {  img: "/images/g4.jpg" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif" }}>
  {/* Hero Slider Section - Full Width */}
  <div style={{ marginBottom: 40 }}>
  <Slider {...heroSettings}>
  {heroSlides.map((slide, index) => (
    <div key={index}>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={slide.backgroundImage}
          alt={slide.title}
          style={{
            width: "100%",
            height: isMobile ? "300px" : "500px",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)", // Optional dark overlay
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: slide.textColor,
            textAlign: "center",
            padding: "0 20px",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: isMobile ? "24px" : "36px", fontWeight: "bold" }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: isMobile ? "14px" : "18px", margin: "15px 0 25px" }}>
            {slide.subtitle}
          </p>
          <button
            style={{
              padding: "12px 30px",
              border: slide.buttonBorder,
              backgroundColor: slide.buttonColor,
              color: slide.textColor,
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "5px",
              transition: "opacity 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {slide.buttonText}
          </button>
        </div>
      </div>
    </div>
  ))}
</Slider>

    </div>

    <div
  style={{
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "0 20px",
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    alignItems: "center",
    gap: "40px",
  }}
>
  {/* Left text block */}
  <div style={{ flex: 1, minWidth: "280px" }}>
    <p
      style={{
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
        textTransform: "uppercase",
        letterSpacing: "1.2px",
        fontWeight: "500",
      }}
    >
      Contemporary design
    </p>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: 1.2,
        marginBottom: "20px",
        color: "#111",
      }}
    >
      The spring <strong style={{ fontWeight: "900" }}>summer</strong> cool
      collection.
    </h2>
    <button
      style={{
        backgroundColor: "#111",
        color: "#fff",
        border: "none",
        padding: "12px 28px",
        fontSize: "16px",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "600",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#111")}
    >
      Shop collections &rarr;
    </button>
  </div>

  {/* Right images block */}
  <div
    style={{
      flex: 1,
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      position: "relative",
      flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
    }}
  >
    {/* First image container */}
    <div style={{ position: "relative", flex: "1 1 45%", minWidth: "200px" }}>
      <img
        src="/images/m2.jpg" // Replace with your actual image path
        alt="Spring summer style 1"
        style={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "15px",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Eyewear
      </div>
    </div>

    {/* Second image container */}
    <div style={{ position: "relative", flex: "1 1 45%", minWidth: "200px" }}>
      <img
        src="/images/m3.jpg" // Replace with your actual image path
        alt="Spring summer style 2"
        style={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "15px",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "'Brush Script MT', cursive",
          textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        Collection
      </div>
    </div>
  </div>
</div>


  {/* Main content starts here - center layout */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 15px",
    }}
  >
    {/* Trending Frames Section */}
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Our Trending Frames</h2>
      <Slider {...trendingSettings}>
        {cards.map((card, index) => (
          <div key={index}>
            <div
              style={{
                margin: "0 10px",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h4 style={{ marginTop: "15px" }}>{card.title}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>

  {/* Promotional Section */}
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    padding: "40px 20px",
    marginTop: "60px",
    backgroundColor: "#ffff",
    width: "100%",
    boxSizing: "border-box",
  }}
>
  {/* Left Image */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <img
      src="/images/wm.jpg" // Replace with your actual image
      alt="Offer"
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </div>

  {/* Right Text + Button */}
  <div style={{ flex: 1 }}>
    <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
      Discover Your Perfect Frame
    </h2>
    <p style={{ fontSize: "16px", marginBottom: "15px", lineHeight: "1.6" }}>
      Browse our handpicked selection of stylish, comfortable, and affordable frames for every occasion.
      Quality and fashion come together in every piece we offer.
    </p>
    <p style={{ fontSize: "16px", marginBottom: "25px", lineHeight: "1.6" }}>
      Whether you're looking for classic elegance, bold statement pieces, or everyday essentials, our collection is designed to suit your unique style and personality.
      Experience superior craftsmanship, durable materials, and the latest trends all in one place.
    </p>
    <p style={{ fontSize: "16px", marginBottom: "25px", lineHeight: "1.6" }}>
      Plus, enjoy personalized fitting advice and exceptional customer service to help you find frames that not only look great but feel perfect.
      Step up your eyewear game with confidence and flair!
    </p>

    <button
      style={{
        padding: "12px 30px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      LEARN MORE
    </button>
  </div>
</div>

{/* Categories Section - Professional Style */}
<div
  style={{
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 15px",
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    gap: "30px",
    justifyContent: "center",
  }}
>
  {[
    {
      title: "Men's",
      img: "/images/m1.jpg",
      buttonText: "Shop Men",
    },
    {
      title: "Women's",
      img: "/images/w2.jpg",
      buttonText: "Shop Women",
    },
    {
      title: "Children's",
      img: "/images/c1.jpg",
      buttonText: "Shop Children",
    },
  ].map(({ title, img, buttonText }, idx) => (
    <div
      key={idx}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f7f7f7";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fff";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          transition: "opacity 0.3s ease",
          display: "block",
        }}
      />
      <div
        style={{
          padding: "20px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            margin: "0 0 15px",
            fontSize: "24px",
            fontWeight: "600",
            color: "#222",
          }}
        >
          {title}
        </h3>
        <button
          style={{
            alignSelf: "flex-start",
            padding: "10px 28px",
            border: "2px solid #222",
            backgroundColor: "transparent",
            color: "#222",
            fontWeight: "600",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#222";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "#222";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#222";
            e.currentTarget.style.borderColor = "#222";
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  ))}
</div>

<Footer />
</div>

  );
};

export default HomePage;
