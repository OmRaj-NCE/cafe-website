// src/components/hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingBeans = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    size: 20 + Math.random() * 30,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 10,
  }));

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--gradient-dark)',
        padding: '6rem 2rem 4rem',
      }}
    >
      {/* Video Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(44,24,16,0.85) 0%, rgba(44,24,16,0.4) 100%)',
          }}
        />
      </div>

      {/* Floating Coffee Beans */}
      {floatingBeans.map((bean) => (
        <motion.div
          key={bean.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: ['100vh', '-10vh'],
            opacity: [0, 1, 1, 0],
            rotate: [0, 720],
            x: [
              `${bean.left}%`,
              `${bean.left + (Math.random() - 0.5) * 20}%`,
              `${bean.left + (Math.random() - 0.5) * 30}%`,
            ],
          }}
          transition={{
            duration: bean.duration,
            repeat: Infinity,
            delay: bean.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            zIndex: 1,
            fontSize: bean.size,
            opacity: 0.15,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          ☕
        </motion.div>
      ))}

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            className="hero-subtitle"
            style={{
              fontSize: '1.2rem',
              color: 'var(--gold)',
              fontFamily: 'var(--font-cursive)',
              marginBottom: '1rem',
              letterSpacing: '0.2em',
            }}
          >
            Welcome to Café Élégance
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ color: 'var(--gold)' }}>Where</span> Every Sip
          <br />
          Tells a <span className="anim-shimmer">Story</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}
        >
          <TypeAnimation
            sequence={[
              'Experience the art of coffee making.',
              2000,
              'Crafted with passion, served with love.',
              2000,
              'Where every bean tells a story.',
              2000,
              'Your perfect cup awaits.',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link
            to="/menu"
            className="btn btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            Explore Our Menu <MdArrowForward style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link
            to="/reservation"
            className="btn btn-outline"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              borderColor: 'var(--cream)',
              color: 'var(--cream)',
            }}
          >
            Reserve a Table
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: 'var(--cream)', fontSize: '1.5rem' }}
          >
            <FaArrowDown style={{ opacity: 0.6 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;