// src/components/animations/FloatingParticles.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = ({ count = 20 }) => {
  const containerRef = useRef(null);

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    opacity: 0.1 + Math.random() * 0.3,
    rotation: Math.random() * 360,
  }));

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: particle.opacity,
            rotate: particle.rotation,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
            x: [`${particle.x}vw`, `${particle.x + 10}vw`, `${particle.x}vw`],
            rotate: [particle.rotation, particle.rotation + 180, particle.rotation],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--gold) 0%, transparent 100%)',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;