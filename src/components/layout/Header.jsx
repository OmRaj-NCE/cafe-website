// src/components/layout/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCoffeeCup, GiHamburgerMenu } from 'react-icons/gi';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MdClose, MdShoppingCart, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reservation', label: 'Reserve' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Mobile menu backdrop variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <motion.header
        className="header"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.8rem 2rem',
          background: scrolled ? 'rgba(44, 24, 16, 0.95)' : 'rgba(44, 24, 16, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <GiCoffeeCup size={32} color="var(--gold)" />
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--cream)',
              fontSize: '1.2rem',
              fontWeight: 700,
              lineHeight: 1.1,
            }}>
              Café <span style={{ color: 'var(--gold)' }}>Élégance</span>
            </span>
            <span style={{
              fontFamily: 'var(--font-cursive)',
              color: 'var(--gold)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              opacity: 0.8,
            }}>
              Premium Coffee House
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                color: location.pathname === link.path ? 'var(--gold)' : 'var(--cream)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: location.pathname === link.path ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                position: 'relative',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
                padding: '0.3rem 0',
              }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--gold)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>
          ))}

          {/* Cart */}
          <Link to="/cart" style={{ position: 'relative', color: 'var(--cream)', textDecoration: 'none' }}>
            <MdShoppingCart size={22} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  background: 'var(--gold)',
                  color: 'var(--dark)',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  fontSize: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--cream)',
              cursor: 'pointer',
              fontSize: '1.2rem',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </motion.button>

          {/* Reserve Button */}
          <Link
            to="/reservation"
            className="btn-primary"
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              background: 'var(--gradient-gold)',
              color: 'var(--dark)',
              fontWeight: 600,
              fontSize: '0.75rem',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-warm)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              whiteSpace: 'nowrap',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = 'var(--shadow-glow)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'var(--shadow-warm)';
            }}
          >
            Reserve Table
          </Link>
        </nav>

        {/* Mobile Right Icons */}
        <div style={{
          display: isMobile ? 'flex' : 'none',
          alignItems: 'center',
          gap: '1rem',
        }}>
          {/* Cart (Mobile) */}
          <Link to="/cart" style={{ position: 'relative', color: 'var(--cream)', textDecoration: 'none' }}>
            <MdShoppingCart size={22} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -8,
                right: -8,
                background: 'var(--gold)',
                color: 'var(--dark)',
                borderRadius: '50%',
                width: 18,
                height: 18,
                fontSize: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
              }}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Theme Toggle (Mobile) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--cream)',
              cursor: 'pointer',
              fontSize: '1.2rem',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="mobile-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--cream)',
              fontSize: '1.6rem',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </motion.button>
        </div>

        {/* Desktop Hamburger (hidden on desktop) */}
        <motion.button
          className="mobile-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            display: isMobile ? 'none' : 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--cream)',
            fontSize: '1.6rem',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 999,
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={menuRef}
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '85%',
                maxWidth: '380px',
                background: 'var(--primary)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 1000,
                overflowY: 'auto',
              }}
            >
              {/* Menu Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GiCoffeeCup size={28} color="var(--gold)" />
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--cream)',
                    fontSize: '1.3rem',
                    margin: 0,
                  }}>
                    Café <span style={{ color: 'var(--gold)' }}>Élégance</span>
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: 'none',
                    color: 'var(--cream)',
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <MdClose />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: location.pathname === link.path ? 'var(--gold)' : 'var(--cream)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: location.pathname === link.path ? 600 : 400,
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: location.pathname === link.path ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      border: location.pathname === link.path ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== link.path) {
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                        e.target.style.transform = 'translateX(6px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== link.path) {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <span>{link.label}</span>
                    {location.pathname === link.path && (
                      <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✦</span>
                    )}
                  </Link>
                ))}

                {/* Reserve Button in Menu */}
                <Link
                  to="/reservation"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    textAlign: 'center',
                    borderRadius: '50px',
                    background: 'var(--gradient-gold)',
                    color: 'var(--dark)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  ✦ Reserve Your Table
                </Link>
              </nav>

              {/* Social Links & Footer */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--cream)',
                      fontSize: '1.2rem',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      opacity: 0.6,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--cream)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.opacity = '0.6';
                    }}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--cream)',
                      fontSize: '1.2rem',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      opacity: 0.6,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--cream)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.opacity = '0.6';
                    }}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--cream)',
                      fontSize: '1.2rem',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      opacity: 0.6,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--cream)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.opacity = '0.6';
                    }}
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--cream)',
                      fontSize: '1.2rem',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      opacity: 0.6,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--cream)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.opacity = '0.6';
                    }}
                  >
                    <FaYoutube />
                  </a>
                </div>
                <p style={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-cursive)',
                  letterSpacing: '0.05em',
                }}>
                  Crafted with ♥ for coffee lovers
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;