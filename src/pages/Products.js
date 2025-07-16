import React from 'react';
import Footer from "../components/Footer";
import './Products.css';

const products = [
  {
    id: 1,
    brand: 'Lacoste',
    image: '/Images/gl4.jpg',
    discount: 23,
    price: 149.99,
  },
  {
    id: 2,
    brand: 'Eco Shades',
    image: '/Images/gl2.jpg',
    discount: 15,
    price: 129.99,
    eco: true,
  },
  {
    id: 3,
    brand: 'Red Mirror',
    image: '/Images/gl3.jpg',
    discount: 13,
    price: 159.99,
  },
  {
    id: 2,
    brand: 'Eco Shades',
    image: '/Images/gl2.jpg',
    discount: 15,
    price: 129.99,
    eco: true,
  },
  {
    id: 3,
    brand: 'Red Mirror',
    image: '/Images/gl3.jpg',
    discount: 13,
    price: 159.99,
  },
  {
    id: 2,
    brand: 'Eco Shades',
    image: '/Images/gl2.jpg',
    discount: 15,
    price: 129.99,
    eco: true,
  },
  {
    id: 3,
    brand: 'Red Mirror',
    image: '/Images/gl3.jpg',
    discount: 13,
    price: 159.99,
  },
  {
    id: 2,
    brand: 'Eco Shades',
    image: '/Images/gl2.jpg',
    discount: 15,
    price: 129.99,
    eco: true,
  },
  {
    id: 3,
    brand: 'Red Mirror',
    image: '/Images/gl3.jpg',
    discount: 13,
    price: 159.99,
  },
  {
    id: 2,
    brand: 'Eco Shades',
    image: '/Images/gl2.jpg',
    discount: 15,
    price: 129.99,
    eco: true,
  },
  {
    id: 3,
    brand: 'Red Mirror',
    image: '/Images/gl3.jpg',
    discount: 13,
    price: 159.99,
  },
  // Add more products as needed...
];

function Products() {
  return (
    <>
      <div className="sunglasses-section">
        {/* Banner */}
        <div className="banner">
          <h2>Get 20% off prescription sunglasses & coatings</h2>
          <p className="code">Code: <strong>SUNRX</strong></p>
          <small>Lens-only deal, excludes contact lenses & items in clearance</small>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button>VIRTUAL TRY-ON</button>
          <button>NEW ARRIVALS</button>
          <button>BEST SELLERS</button>
          <button>PRESCRIPTION</button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={`${product.id}-${index}`}>
              <img src={product.image} alt={product.brand} />
              {product.eco && <span className="eco-tag">🌱 ECO</span>}
              <span className="discount-tag">-{product.discount}%</span>
              <h4>{product.brand}</h4>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
