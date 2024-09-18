// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Today from './pages/Today/Today';
import ByDate from './pages/ByDate/ByDate';
import Since from './pages/Since/Since';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext'; // Sørg for, at ThemeProvider er importeret korrekt

const App = () => {
  return (
    <ThemeProvider> {/* Sørg for, at ThemeProvider omslutter Router */}
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/by-date" element={<ByDate />} />
            <Route path="/since" element={<Since />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
