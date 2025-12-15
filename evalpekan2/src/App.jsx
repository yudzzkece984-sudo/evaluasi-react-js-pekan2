import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import './App.css';

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`theme-wrapper ${theme}`}> {/* PERBAIKAN SINTAKS */}
      {children}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ThemeWrapper>
          <div className="App">
            <Home />
          </div>
        </ThemeWrapper>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;