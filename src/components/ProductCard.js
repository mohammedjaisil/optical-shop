import React from 'react';
import './ProductCard.css'; // ✅ correct path

const ProductCard = ({ image, brand, name, price, colors, isNew }) => {
  return (
    <div className="product-card">
      {isNew && <span className="new-label">New In</span>}
      <div className="image-wrapper">
        <img src={image} alt={name} />
        <button className="favorite-btn">♡</button>
        <button className="expand-btn">＋</button>
      </div>
      <div className="product-info">
        <h4>{brand}</h4>
        <p>{name}</p>
        <p className="price">AED {price.toFixed(2)}</p>
        <p className="colors">{colors} Color{colors > 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default ProductCard;
