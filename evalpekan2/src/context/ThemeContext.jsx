import React, { createContext, useReducer, useContext, useMemo } from 'react';
import { themeReducer, initialThemeState } from '../reducers/themeReducer';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const value = useMemo(() => ({
    theme: state.theme,
    toggleTheme,
    setTheme
  }), [state.theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus digunakan didalam ThemeProvider');
  }
  return context;
};