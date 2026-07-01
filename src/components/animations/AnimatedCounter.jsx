// src/components/animations/AnimatedCounter.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      const startValue = 0;
      const endValue = target;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, target, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default AnimatedCounter;