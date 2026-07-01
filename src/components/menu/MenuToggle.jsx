// src/components/menu/MenuToggle.jsx - Enhanced
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaUtensils } from 'react-icons/fa';

const MenuToggle = ({ title, icon, children, defaultOpen = true, count }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const categoryIcons = {
    'Coffee Collection': '☕',
    'Chai & Tea': '🍵',
    'Indian Breakfast': '🌅',
    'Lunch Thalis': '🍛',
    'Snacks & Street Food': '🧆',
    'Indian Sweets': '🍬',
    'Beverages': '🥤',
    'Fresh Breads': '🥖',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '1.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease',
      }}
      whileHover={{
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Header - Click to Toggle */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: isOpen ? 'rgba(212, 175, 55, 0.04)' : 'var(--cream)',
          borderBottom: isOpen ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
        whileHover={{
          background: isOpen ? 'rgba(212, 175, 55, 0.08)' : 'var(--cream-dark)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.8rem' }}>{categoryIcons[title] || icon || '🍽️'}</span>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              color: 'var(--primary)',
              margin: 0,
            }}>
              {title}
            </h3>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--coffee-light)',
              opacity: 0.7,
            }}>
              {count || 0} items
            </span>
          </div>
          <span style={{
            fontSize: '0.65rem',
            background: isOpen ? 'var(--gold)' : 'var(--coffee-light)',
            color: isOpen ? 'var(--dark)' : 'white',
            padding: '2px 12px',
            borderRadius: '20px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
          }}>
            {isOpen ? '✦ Open' : '✦ Closed'}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '1.5rem',
            color: 'var(--gold)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--coffee-light)',
            opacity: 0.6,
          }}>
            {isOpen ? 'Minimize' : 'Maximize'}
          </span>
          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </motion.div>
      </motion.div>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '1.5rem' }}>
              {/* Decorative Indian Pattern */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '1.5rem',
                opacity: 0.3,
              }}>
                {['✦', '•', '✦', '•', '✦', '•', '✦'].map((dot, i) => (
                  <span key={i} style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>{dot}</span>
                ))}
              </div>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuToggle;