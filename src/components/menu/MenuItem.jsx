// src/components/menu/MenuItem.jsx - CLEAN WORKING VERSION
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaHeart, 
  FaHeartBroken, 
  FaFire, 
  FaLeaf
} from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { useCart } from '../../context/CartContext';

const MenuItem = ({ item, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  // Indian currency formatter
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryColor = (category) => {
    const colors = {
      coffee: '#6F4E37',
      tea: '#B8860B',
      breakfast: '#FF8C00',
      lunch: '#2E7D32',
      snacks: '#D84315',
      sweets: '#C62828',
      beverages: '#1565C0',
      breads: '#F9A825',
    };
    return colors[category] || '#333';
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      coffee: '☕',
      tea: '🍵',
      breakfast: '🌅',
      lunch: '🍛',
      snacks: '🧆',
      sweets: '🍬',
      beverages: '🥤',
      breads: '🥖',
    };
    return emojis[category] || '🍽️';
  };

  const getSpiceLevel = (item) => {
    if (item.name.toLowerCase().includes('chai') || item.name.toLowerCase().includes('tea')) return 'Mild';
    if (item.name.toLowerCase().includes('masala') || item.name.toLowerCase().includes('spice')) return 'Medium';
    if (item.name.toLowerCase().includes('chilly') || item.name.toLowerCase().includes('spicy')) return 'Hot';
    if (item.category === 'sweets') return 'Sweet';
    return 'Mild';
  };

  const spiceIcons = {
    'Mild': '🌿',
    'Medium': '🌶️',
    'Hot': '🔥',
    'Sweet': '🍬',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-md)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer',
        position: 'relative',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {/* Animated Border Glow on Hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: 'var(--gradient-gold)',
            borderRadius: 'var(--radius-xl)',
            zIndex: -1,
            filter: 'blur(4px)',
            opacity: 0.3,
          }}
        />
      )}

      {/* Image Section with Pattern Overlay */}
      <div
        style={{
          height: '180px',
          background: `linear-gradient(135deg, ${getCategoryColor(item.category)} 0%, ${getCategoryColor(item.category)}CC 100%)`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)`,
          pointerEvents: 'none',
        }} />
        
        <motion.span
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.5 }}
        >
          {getCategoryEmoji(item.category)}
        </motion.span>

        {/* Origin Badge */}
        {item.origin && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            padding: '4px 12px',
            borderRadius: '20px',
            color: 'white',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <span style={{ fontSize: '0.7rem' }}>📍</span> {item.origin}
          </div>
        )}

        {/* Dietary Tags */}
        {item.dietary && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
          }}>
            {item.dietary.map((diet) => (
              <motion.span
                key={diet}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  padding: '2px 10px',
                  borderRadius: '20px',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {diet === 'Vegan' ? '🌱' : diet === 'Vegetarian' ? '🥬' : diet === 'Gluten-Free' ? '🌾' : diet}
              </motion.span>
            ))}
          </div>
        )}

        {/* Featured Badge */}
        {item.featured && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'var(--gradient-gold)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'var(--dark)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: 'var(--shadow-glow)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ✦ Featured
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Title & Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            color: 'var(--primary)',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            {item.name}
          </h3>
          <motion.span
            whileHover={{ scale: 1.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--gold)',
              background: 'var(--gold-pale)',
              padding: '2px 12px',
              borderRadius: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            {formatPrice(item.price)}
          </motion.span>
        </div>

        {/* Description */}
        <p style={{
          color: 'var(--coffee-light)',
          fontSize: '0.85rem',
          marginBottom: '0.75rem',
          lineHeight: 1.6,
        }}>
          {item.description}
        </p>

        {/* Ingredients */}
        {item.ingredients && (
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--coffee-light)',
            opacity: 0.7,
            marginBottom: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
          }}>
            {item.ingredients.map((ing, i) => (
              <span key={i} style={{
                background: 'rgba(0,0,0,0.03)',
                padding: '2px 8px',
                borderRadius: '12px',
              }}>
                {ing}
              </span>
            ))}
          </p>
        )}

        {/* Rating & Spice Level */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  style={{
                    color: i < Math.floor(item.rating) ? 'var(--gold)' : '#e0e0e0',
                    fontSize: '0.8rem',
                  }}
                />
              ))}
              <span style={{ fontWeight: 600, fontSize: '0.85rem', marginLeft: '2px' }}>
                {item.rating}
              </span>
            </div>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--coffee-light)',
              opacity: 0.6,
            }}>
              ({item.popularity}% liked)
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--coffee-light)',
          }}>
            <span>{spiceIcons[getSpiceLevel(item)]}</span>
            <span>{getSpiceLevel(item)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(item)}
            style={{
              flex: 1,
              padding: '0.7rem 1rem',
              background: 'var(--gradient-gold)',
              color: 'var(--dark)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: isHovered ? 'var(--shadow-warm)' : 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = 'var(--shadow-glow)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = isHovered ? 'var(--shadow-warm)' : 'none';
            }}
          >
            <MdAddShoppingCart /> Add to Cart
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid rgba(0,0,0,0.06)',
              background: isLiked ? 'rgba(229,57,53,0.1)' : 'transparent',
              color: isLiked ? '#e53935' : 'var(--coffee-light)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              flexShrink: 0,
            }}
          >
            {isLiked ? <FaHeart /> : <FaHeartBroken />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;