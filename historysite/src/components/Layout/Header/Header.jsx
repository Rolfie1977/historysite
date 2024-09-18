// src/components/Layout/Header/Header.jsx
import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Sørg for, at ThemeContext bruges korrekt

  return (
    <header className={styles.header}>
      <h1>Historiske Begivenheder</h1>
      <button onClick={toggleTheme}>
        Skift til {theme === 'light' ? 'Mørkt' : 'Lyst'} Tema
      </button>
    </header>
  );
};

export default Header;
