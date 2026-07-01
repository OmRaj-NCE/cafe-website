// src/components/layout/Footer.jsx - Enhanced Indian Aesthetic Footer
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebook, 
  FaYoutube, 
  FaTwitter, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCoffee,
  FaHeart,
  FaArrowUp,
  FaWhatsapp,
  FaTripadvisor,
  FaGoogle,
  FaUtensils,
  FaLeaf
} from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
import { MdLocalCafe, MdRestaurant, MdDeliveryDining } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/menu', label: 'Our Menu', icon: '🍽️' },
    { path: '/gallery', label: 'Gallery', icon: '📸' },
    { path: '/reservation', label: 'Reservations', icon: '📅' },
    { path: '/about', label: 'About Us', icon: '👨‍🍳' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/events', label: 'Events', icon: '🎪' },
    { path: '/contact', label: 'Contact', icon: '📞' },
  ];

  const serviceLinks = [
    { label: 'Dine-In Experience', icon: '🍽️' },
    { label: 'Takeaway', icon: '🛍️' },
    { label: 'Home Delivery', icon: '🚚' },
    { label: 'Catering Services', icon: '👨‍🍳' },
    { label: 'Private Events', icon: '🎉' },
    { label: 'Coffee Subscription', icon: '☕' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube', color: '#FF0000' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919999999999', label: 'WhatsApp', color: '#25D366' },
    { icon: <FaTripadvisor />, url: 'https://tripadvisor.com', label: 'TripAdvisor', color: '#34E0A1' },
  ];

  const openingHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 10:00 PM', isToday: false },
    { day: 'Saturday', hours: '8:00 AM - 11:00 PM', isToday: false },
    { day: 'Sunday', hours: '8:00 AM - 10:00 PM', isToday: true },
  ];

  return (
    <footer
      style={{
        background: 'var(--primary)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Top Border with Indian Pattern */}
      <div style={{
        height: '4px',
        background: 'var(--gradient-gold)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            width: '30%',
          }}
        />
      </div>

      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 1.5rem', position: 'relative', zIndex: 1 }}>
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '2.5rem',
        }}>
          
          {/* ===== Brand Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'var(--gradient-gold)',
                  padding: '10px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GiCoffeeCup size={28} color="var(--dark)" />
              </motion.div>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: 'var(--gold)',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  Café <span style={{ color: 'var(--gold-light)' }}>Élégance</span>
                </h2>
                <p style={{
                  fontFamily: 'var(--font-cursive)',
                  fontSize: '0.7rem',
                  color: 'var(--gold)',
                  opacity: 0.7,
                  letterSpacing: '0.15em',
                  margin: 0,
                }}>
                  ✦ Premium Coffee House ✦
                </p>
              </div>
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              maxWidth: '320px',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
            }}>
              Experience the art of fine coffee and authentic Indian cuisine in a warm, elegant setting. 
              Where every cup tells a story and every meal creates a memory.
            </p>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
              >
                <span style={{ fontSize: '0.8rem' }}>⭐</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>4.9 ★</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
              >
                <span style={{ fontSize: '0.8rem' }}>🏆</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Best Cafe 2024</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
              >
                <span style={{ fontSize: '0.8rem' }}>🌱</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>100% Organic</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cream)',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.color = 'white';
                    e.target.style.borderColor = social.color;
                    e.target.style.transform = 'translateY(-5px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                    e.target.style.color = 'var(--cream)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== Quick Links ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--gold)',
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.75rem',
            }}>
              Quick Links
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '40px',
                height: '2px',
                background: 'var(--gradient-gold)',
                borderRadius: '2px',
              }} />
            </h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              margin: 0,
              padding: 0,
            }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--gold)';
                      e.target.style.transform = 'translateX(6px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.6)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '0.7rem' }}>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Services ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--gold)',
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.75rem',
            }}>
              Our Services
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '40px',
                height: '2px',
                background: 'var(--gradient-gold)',
                borderRadius: '2px',
              }} />
            </h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              margin: 0,
              padding: 0,
            }}>
              {serviceLinks.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: '0.8rem' }}>{service.icon}</span>
                  {service.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Contact & Hours ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--gold)',
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.75rem',
            }}>
              Get in Touch
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '40px',
                height: '2px',
                background: 'var(--gradient-gold)',
                borderRadius: '2px',
              }} />
            </h3>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <motion.a
                href="tel:+919999999999"
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                <span style={{
                  background: 'rgba(212,175,55,0.1)',
                  padding: '8px',
                  borderRadius: '50%',
                  fontSize: '0.9rem',
                  color: 'var(--gold)',
                }}><FaPhone /></span>
                <span>+91 99999 99999</span>
              </motion.a>

              <motion.a
                href="mailto:hello@cafeelgance.com"
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                <span style={{
                  background: 'rgba(212,175,55,0.1)',
                  padding: '8px',
                  borderRadius: '50%',
                  fontSize: '0.9rem',
                  color: 'var(--gold)',
                }}><FaEnvelope /></span>
                <span>hello@cafeelgance.com</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                }}
              >
                <span style={{
                  background: 'rgba(212,175,55,0.1)',
                  padding: '8px',
                  borderRadius: '50%',
                  fontSize: '0.9rem',
                  color: 'var(--gold)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}><FaMapMarkerAlt /></span>
                <span>123 Coffee Lane,<br />Paris, France</span>
              </motion.div>
            </div>

            {/* Opening Hours */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem',
              border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
                color: 'var(--gold)',
              }}>
                <FaClock size={14} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  Opening Hours
                </span>
              </div>
              {openingHours.map((slot, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.3rem 0',
                    borderBottom: index < openingHours.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                    color: slot.isToday ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                    fontSize: '0.75rem',
                  }}
                >
                  <span>{slot.day}</span>
                  <span style={{ fontWeight: slot.isToday ? 600 : 400 }}>
                    {slot.hours}
                    {slot.isToday && <span style={{ marginLeft: '6px', fontSize: '0.6rem' }}>● Open</span>}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== Newsletter & CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            marginBottom: '2.5rem',
            border: '1px solid rgba(212,175,55,0.1)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--gold)',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}>
              Join Our <span style={{ color: 'var(--gold-light)' }}>Circle</span>
            </h4>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem',
              lineHeight: 1.6,
            }}>
              Subscribe for exclusive offers, new menu updates, and coffee stories.
              <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '4px' }}>
                🎁 Get 10% off your first order
              </span>
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.querySelector('input');
              if (input.value) {
                alert('🎉 Welcome to the family! Check your email for the welcome offer.');
                input.value = '';
              }
            }}
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.8rem 1.2rem',
                borderRadius: '50px',
                border: '2px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--cream)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--gold)';
                e.target.style.background = 'rgba(255,255,255,0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                border: 'none',
                background: 'var(--gradient-gold)',
                color: 'var(--dark)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}
            >
              Subscribe ✦
            </motion.button>
          </form>
        </motion.div>

        {/* ===== Bottom Bar ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.3)',
            }}>
              © {currentYear} Café Élégance. All rights reserved.
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}>
              <FaHeart size={10} style={{ color: 'var(--gold)' }} />
              Made with love
            </span>
          </div>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >
              Cookie Policy
            </a>
            <span style={{
              fontFamily: 'var(--font-cursive)',
              fontSize: '0.7rem',
              color: 'rgba(212,175,55,0.4)',
              letterSpacing: '0.05em',
            }}>
              ✦ Crafted for coffee lovers ✦
            </span>
          </div>
        </motion.div>

        {/* ===== Back to Top Button ===== */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--gradient-gold)',
                color: 'var(--dark)',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-glow)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;