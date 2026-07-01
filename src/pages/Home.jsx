// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GiCoffeeBeans, GiCoffeeCup, GiCroissant } from 'react-icons/gi';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

// Components
import Hero from '../components/hero/Hero';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import FloatingParticles from '../components/animations/FloatingParticles';

const Home = () => {
  const features = [
    { icon: <GiCoffeeBeans />, title: 'Premium Beans', desc: 'Sourced from the finest estates worldwide' },
    { icon: <GiCoffeeCup />, title: 'Expert Baristas', desc: 'Crafted with precision and passion' },
    { icon: <GiCroissant />, title: 'Fresh Pastries', desc: 'Baked fresh every morning' },
  ];

  const testimonials = [
    {
      name: 'Sophia Chen',
      role: 'Food Critic',
      text: 'The most exquisite coffee experience I\'ve had in years. Every sip tells a story.',
      rating: 5,
    },
    {
      name: 'Marcus Rivera',
      role: 'Regular Customer',
      text: 'This place is my sanctuary. The ambiance, the coffee, the service - perfection.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Event Planner',
      text: 'We host all our corporate events here. The attention to detail is unmatched.',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Café Élégance — Premium Coffee Experience in the Heart of the City</title>
        <meta name="description" content="Indulge in the finest coffee, freshly baked pastries, and an ambiance that feels like home. Award-winning cafe with a passion for perfection." />
        <meta property="og:title" content="Café Élégance — Premium Coffee House" />
        <meta property="og:description" content="Experience the art of coffee making. From bean to cup, every step is crafted with love." />
        <meta name="keywords" content="coffee shop, premium coffee, café, pastries, award winning, best coffee, coffee house" />
        <link rel="canonical" href="https://cafeelgance.com" />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="features-section" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title">
              Where Every Cup is <span className="highlight">a Masterpiece</span>
            </h2>
            <p className="section-subtitle">
              We believe in the art of coffee. From sourcing the finest beans to the final pour,
              every step is a labor of love.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 2rem',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{
                  y: -10,
                  boxShadow: 'var(--shadow-xl)',
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem' }}
                >
                  {feature.icon}
                </motion.div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--coffee-light)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem', background: 'var(--gradient-warm)', color: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: 15000, label: 'Cups Served', suffix: '+' },
              { value: 128, label: 'Coffee Varieties', suffix: '' },
              { value: 4.9, label: 'Average Rating', suffix: ' ★' },
              { value: 10, label: 'Years of Excellence', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700 }}>
                  <AnimatedCounter target={stat.value} />{stat.suffix}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', opacity: 0.8, marginTop: '0.5rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title">
              What Our <span className="highlight">Guests Say</span>
            </h2>
            <p className="section-subtitle">Real stories from real people who found their happy place at Café Élégance</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="card"
                style={{
                  padding: '2rem',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                }}
              >
                <FaQuoteLeft style={{ color: 'var(--gold)', fontSize: '2rem', opacity: 0.3, marginBottom: '1rem' }} />
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', lineHeight: 1.8, color: 'var(--coffee)' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--primary)' }}>
                    {testimonial.name}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--coffee-light)' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/gallery" className="btn btn-primary">
              View Our Gallery <MdArrowForward />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 2rem', background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: '3rem', marginBottom: '1rem' }}>
              Ready for the <span style={{ color: 'var(--gold)' }}>Perfect Cup</span>?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join us for a coffee experience that will change the way you think about your daily brew.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/reservation" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn btn-outline" style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}>
                Explore Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Particles */}
      <FloatingParticles />
    </>
  );
};

export default Home;