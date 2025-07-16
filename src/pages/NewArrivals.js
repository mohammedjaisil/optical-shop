import React from 'react';
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard';
import './NewArrivals.css'; // Add this line to apply styling

const products = [
  {
    id: 1,
    image: '/Images/gl1.jpg',
    brand: 'SESTINI',
    name: 'Quattro Unisex Square Sunglasses',
    price: 2441.25,
    colors: 2,
    isNew: true,
  },
  {
    id: 2,
    image: '/Images/gl2.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 3,
    image: '/Images/gl3.jpg',
    brand: 'SESTINI',
    name: 'Quattro Unisex Square Sunglasses',
    price: 2441.25,
    colors: 2,
    isNew: true,
  },
  {
    id: 4,
    image: '/Images/gl4.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 5,
    image: '/Images/gl5.jpg',
    brand: 'SESTINI',
    name: 'Quattro Unisex Square Sunglasses',
    price: 2441.25,
    colors: 2,
    isNew: true,
  },
  {
    id: 6,
    image: '/Images/gl6.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 7,
    image: '/Images/gl7.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 8,
    image: '/Images/gl8.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 9,
    image: '/Images/gl9.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  {
    id: 10,
    image: '/Images/gl10.jpg',
    brand: 'SESTINI',
    name: 'Sei E Mezzo Unisex Panthos Sunglasses',
    price: 2194.50,
    colors: 3,
    isNew: true,
  },
  // Add more products here...
];
const headingStyle = {
  fontSize: '36px',
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: '40px',
  top:'20px',
  color: '#222',
  position: 'relative',
  display: 'inline-block',
  left: '50%',
  transform: 'translateX(-50%)',
  paddingBottom: '10px',
  borderBottom: '3px solid #00796b',
};
const NewArrivals = () => {
  return (
    <div className="new-arrivals-page">
      <h2 style={headingStyle}>New Arrivals</h2>
      <div className="card-container">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default NewArrivals;
