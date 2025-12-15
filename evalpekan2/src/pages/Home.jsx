import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import CartBadge from '../components/CartBadge';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Gagal mengambil produk');
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className={`home-container ${theme}`}> {/* PERBAIKAN SINTAKS */}
      <header className="app-header">
        <div className="header-left">
          <h1>Katalog Produk</h1>
        </div>
        <div className="header-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☀ Mode Terang' : '🌙 Mode Gelap'}
          </button>
          <CartBadge />
        </div>
      </header>
      <div className="main-content">
        <div className="controls-section">
          <div className="controls-container">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="stats-container">
            <p>Menampilkan {filteredProducts.length} dari {products.length} produk</p>
            {selectedCategory !== 'all' && (
              <span className="category-badge">
                Kategori: {selectedCategory}
              </span>
            )}
          </div>
        </div>
        <div className="product-list-container">
          <ProductList
            products={filteredProducts}
            loading={loading}
            error={error}
          />
        </div>
      </div>
      <footer className="app-footer">
        <p>Aplikasi Katalog Produk © 2025 - Dibuat dengan React</p>
      </footer>
    </div>
  );
};

export default Home;