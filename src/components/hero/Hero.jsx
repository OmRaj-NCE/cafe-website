// src/components/hero/Hero.jsx - FIX CLS
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowDown,
  FaCoffee,
  FaMugHot,
  FaLeaf,
  FaGlassCheers,
} from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = [
    'Experience the art of coffee making.',
    'Crafted with passion, served with love.',
    'Where every bean tells a story.',
    'Your perfect cup awaits.',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + currentPhrase[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setDisplayText('');
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, displayText, phraseIndex, phrases]);

  // Floating elements data
  const floatingElements = [
    { id: 1, icon: <FaCoffee />, size: '3.5rem', left: '5%', top: '15%', delay: 0, duration: 4, floatDistance: 25, rotation: true, opacity: 0.25 },
    { id: 2, icon: '🫘', size: '2.5rem', left: '2%', top: '40%', delay: 1.5, duration: 5, floatDistance: 30, rotation: true, opacity: 0.2 },
    { id: 3, icon: <FaMugHot />, size: '3rem', left: '8%', top: '65%', delay: 0.8, duration: 4.5, floatDistance: 20, rotation: false, opacity: 0.2 },
    { id: 4, icon: '🍵', size: '2.8rem', left: '3%', top: '85%', delay: 2, duration: 5.5, floatDistance: 22, rotation: true, opacity: 0.15 },
    { id: 5, icon: <FaGlassCheers />, size: '4rem', right: '5%', top: '10%', delay: 1, duration: 4.8, floatDistance: 28, rotation: true, opacity: 0.2 },
    { id: 6, icon: '🫘', size: '3rem', right: '2%', top: '35%', delay: 2.5, duration: 5.2, floatDistance: 35, rotation: true, opacity: 0.18 },
    { id: 7, icon: <FaCoffee />, size: '3.5rem', right: '7%', top: '55%', delay: 0.5, duration: 4.2, floatDistance: 24, rotation: false, opacity: 0.15 },
    { id: 8, icon: '☕', size: '2.5rem', right: '4%', top: '78%', delay: 3, duration: 6, floatDistance: 18, rotation: true, opacity: 0.12 },
  ];

  // Floating coffee beans
  const coffeeBeans = Array.from({ length: 15 }, (_, i) => ({
    id: i + 100,
    left: 2 + Math.random() * 96,
    top: 5 + Math.random() * 90,
    size: 8 + Math.random() * 16,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 8,
    opacity: 0.06 + Math.random() * 0.12,
  }));

  // Steam particles
  const steamParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i + 200,
    left: 15 + Math.random() * 70,
    bottom: 30 + Math.random() * 40,
    size: 4 + Math.random() * 8,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 3,
    opacity: 0.1 + Math.random() * 0.15,
  }));

  // Sparkle particles
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i + 300,
    left: 5 + Math.random() * 90,
    top: 5 + Math.random() * 90,
    size: 2 + Math.random() * 4,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 5,
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
        // FIX CLS: Reserve space for video
        aspectRatio: 'auto',
      }}
    >
      {/* Video Background - FIX CLS: Fixed dimensions */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          // FIX CLS: Reserve space
          minHeight: '100vh',
          width: '100%',
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
            // FIX CLS: Prevent layout shift
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
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

      {/* Floating Cafe Elements */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0, y: 0, rotate: 0, scale: 0.8 }}
          animate={{
            opacity: el.opacity,
            y: [0, -el.floatDistance, 0],
            rotate: el.rotation ? [0, 15, -10, 5, 0] : [0, 0, 0, 0, 0],
            scale: [0.8, 1, 0.9, 1, 0.8],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: el.left || 'auto',
            right: el.right || 'auto',
            top: el.top,
            zIndex: 1,
            color: 'var(--gold)',
            fontSize: el.size,
            pointerEvents: 'none',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textShadow: '0 0 40px rgba(212,175,55,0.1)',
            filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.05))',
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      {/* Floating Coffee Beans */}
      {coffeeBeans.map((bean) => (
        <motion.div
          key={bean.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, bean.opacity, bean.opacity, 0],
            y: [0, -100, -200, -300],
            x: [0, bean.id % 3 === 0 ? 20 : bean.id % 3 === 1 ? -20 : 0, bean.id % 3 === 0 ? -15 : bean.id % 3 === 1 ? 15 : 0],
            rotate: [0, 180, 360, 540],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${bean.left}%`,
            top: `${bean.top}%`,
            zIndex: 1,
            fontSize: `${bean.size}px`,
            color: 'var(--gold)',
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0,
          }}
        >
          🫘
        </motion.div>
      ))}

      {/* Steam Particles */}
      {steamParticles.map((steam) => (
        <motion.div
          key={steam.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, steam.opacity, 0],
            y: [-20, -80, -150],
            x: [0, steam.id % 2 === 0 ? 15 : -15, steam.id % 2 === 0 ? -10 : 10],
            scale: [0.8, 1.2, 1.5],
          }}
          transition={{
            duration: steam.duration,
            delay: steam.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            left: `${steam.left}%`,
            bottom: `${steam.bottom}%`,
            zIndex: 1,
            width: `${steam.size}px`,
            height: `${steam.size}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(4px)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      ))}

      {/* Sparkle Particles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            zIndex: 1,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: 'var(--gold)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(212,175,55,0.5)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      ))}

      {/* ===== HERO CONTENT ===== */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          // FIX CLS: Reserve space
          width: '100%',
          padding: '0 1rem',
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

        {/* Typewriter Text - FIX CLS: Fixed height */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem',
            // FIX CLS: Reserve space
            minHeight: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ 
            display: 'inline-block',
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'var(--font-body)',
          }}>
            {displayText}
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.3rem',
                background: isDeleting ? 'transparent' : 'var(--gold)',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'blinkCaret 0.8s step-end infinite',
              }}
            />
          </span>
        </motion.div>

        {/* Buttons - FIX CLS: Fixed height container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            minHeight: '60px', // FIX CLS: Reserve space
          }}
        >
          <Link
            to="/menu"
            className="btn btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '50px',
              background: 'var(--gradient-gold)',
              color: 'var(--dark)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-warm)',
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
              textDecoration: 'none',
              borderRadius: '50px',
              border: '2px solid var(--cream)',
              color: 'var(--cream)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Reserve a Table
          </Link>
        </motion.div>

        {/* Scroll Indicator - FIX CLS: Fixed position */}
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

      {/* Decorative Bottom Wave */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1,
          background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)',
          opacity: 0.1,
        }}
      />

      {/* Add blink caret animation */}
      <style>
        {`
          @keyframes blinkCaret {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;