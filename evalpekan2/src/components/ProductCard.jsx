import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-category">
          <span>{product.category}</span>
        </div>
        <div className="product-rating">
          <span>⭐ {product.rating.rate}</span>
          <span>({product.rating.count} reviews)</span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;