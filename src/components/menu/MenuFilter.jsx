// src/components/menu/MenuFilter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MenuFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'center',
        marginBottom: '2rem',
        padding: '0.5rem',
      }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          style={{
            padding: '0.6rem 1.5rem',
            borderRadius: '50px',
            border: activeCategory === category.id ? '2px solid var(--gold)' : '2px solid transparent',
            background: activeCategory === category.id ? 'var(--gradient-gold)' : 'rgba(255,255,255,0.8)',
            color: activeCategory === category.id ? 'var(--dark)' : 'var(--coffee)',
            fontWeight: activeCategory === category.id ? 700 : 500,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: activeCategory === category.id ? 'var(--shadow-warm)' : 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span>{category.icon}</span>
          {category.label}
          {activeCategory === category.id && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400 }}
              style={{ fontSize: '0.7rem' }}
            >
              ✦
            </motion.span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default MenuFilter;