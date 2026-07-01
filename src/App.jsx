// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { ReservationProvider } from './context/ReservationContext';

// Styles
import './styles/global.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      offset: 120,
    });
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <CartProvider>
          <ReservationProvider>
            <Router>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
              <Toaster
                position="bottom-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--cream)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-body)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                  },
                }}
              />
            </Router>
          </ReservationProvider>
        </CartProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;