// src/components/Layout/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.scss'; // Hvis du bruger SCSS-moduler

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Historiske Begivenheder. Alle rettigheder forbeholdes.</p>
    </footer>
  );
};

export default Footer; // Sørg for, at du eksporterer komponenten som default
