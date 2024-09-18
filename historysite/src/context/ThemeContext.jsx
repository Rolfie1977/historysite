// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext(); // Dette opretter konteksten

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Lys som standardtema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
