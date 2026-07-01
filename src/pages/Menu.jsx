// src/pages/Menu.jsx - PROFESSIONAL VERSION
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaSearch, 
  FaFilter, 
  FaTimes, 
  FaUtensils, 
  FaCoffee, 
  FaLeaf,
  FaFire,
  FaStar,
  FaArrowUp,
  FaInfoCircle
} from 'react-icons/fa';
import { MdClear, MdRestaurantMenu } from 'react-icons/md';

import menuData from '../data/menuData';
import MenuItem from '../components/menu/MenuItem';
import MenuFilter from '../components/menu/MenuFilter';
import MenuToggle from '../components/menu/MenuToggle';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeItemCount, setActiveItemCount] = useState(0);
  
  const searchRef = useRef(null);
  const menuSectionRef = useRef(null);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let items = menuData.items;
    
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.ingredients.some(i => i.toLowerCase().includes(term)) ||
        item.category.toLowerCase().includes(term)
      );
    }
    
    return items;
  }, [activeCategory, searchTerm]);

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups = {};
    filteredItems.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  // Update active item count
  useEffect(() => {
    setActiveItemCount(filteredItems.length);
  }, [filteredItems]);

  // Get category icon and label
  const getCategoryIcon = (category) => {
    const icons = {
      coffee: '☕',
      tea: '🍵',
      breakfast: '🌅',
      lunch: '🍛',
      snacks: '🧆',
      sweets: '🍬',
      beverages: '🥤',
      breads: '🥖',
    };
    return icons[category] || '🍽️';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      coffee: 'Coffee Collection',
      tea: 'Chai & Tea Selection',
      breakfast: 'Indian Breakfast',
      lunch: 'Lunch Thalis',
      snacks: 'Snacks & Street Food',
      sweets: 'Indian Sweets',
      beverages: 'Refreshing Beverages',
      breads: 'Fresh Breads',
    };
    return labels[category] || category;
  };

  const getCategoryCount = (category) => {
    return menuData.items.filter(item => item.category === category).length;
  };

  // Scroll to menu section
  const scrollToMenu = () => {
    menuSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setIsFilterOpen(false);
  };

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') {
        searchRef.current?.blur();
        setSearchTerm('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Our Menu | Café Élégance — Premium Coffee & Indian Cuisine</title>
        <meta name="description" content="Explore our curated menu of premium coffee, artisanal chai, authentic Indian dishes, fresh pastries, and delicious meals. Every item crafted with love and precision." />
        <meta property="og:title" content="Our Menu | Café Élégance" />
        <meta property="og:description" content="Discover our award-winning coffee selection and authentic Indian dishes." />
        <meta name="keywords" content="coffee menu, indian cuisine, chai, breakfast, lunch, sweets, cafe menu" />
        <link rel="canonical" href="https://cafeelgance.com/menu" />
      </Helmet>

      {/* Page Hero - Enhanced */}
      <section
        style={{
          padding: '8rem 2rem 4rem',
          background: 'var(--gradient-warm)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '60%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-40%',
          left: '-20%',
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            style={{
              display: 'inline-block',
              background: 'rgba(212,175,55,0.15)',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ✦ Explore Our Collection
            </span>
          </motion.div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--cream)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '0.5rem',
          }}>
            Our <span style={{ color: 'var(--gold)' }}>Menu</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Every item tells a story. From bean to cup, from oven to plate — 
            <span style={{ display: 'block', color: 'var(--gold)' }}>
              crafted with passion, served with love.
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={scrollToMenu}
            style={{
              marginTop: '2rem',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              background: 'var(--gradient-gold)',
              color: 'var(--dark)',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-warm)',
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
            Browse Menu ↓
          </motion.button>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section
        ref={menuSectionRef}
        style={{
          padding: '3rem 2rem 6rem',
          background: 'var(--cream)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* ===== INDIAN SPECIALS BANNER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--coffee) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 2.5rem',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Decorative Pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)`,
              pointerEvents: 'none',
            }} />
            
            {/* Glow Effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '60%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>🇮🇳</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--gold)',
                    margin: 0,
                  }}>
                    Taste of India
                  </h3>
                  <span style={{
                    background: 'rgba(212,175,55,0.15)',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.65rem',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    Authentic
                  </span>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Authentic Indian recipes passed down through generations, made with love and the finest ingredients.
                  <span style={{ display: 'block', fontSize: '0.8rem', marginTop: '0.25rem', color: 'rgba(255,255,255,0.4)' }}>
                    🌶️ Spice levels available · 🥬 Vegetarian options · 🌱 Vegan friendly
                  </span>
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}>
                {['🌿', '🌶️', '🔥', '🍬'].map((emoji, i) => (
                  <span key={i} style={{
                    fontSize: '1.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== SEARCH & FILTER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              background: 'var(--white)',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(0,0,0,0.03)',
            }}>
              {/* Search Input */}
              <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                <FaSearch style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: isSearchFocused ? 'var(--gold)' : 'var(--coffee-light)',
                  transition: 'color 0.3s ease',
                  fontSize: '0.9rem',
                }} />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search menu... (Ctrl+K)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 2.5rem 0.7rem 3rem',
                    borderRadius: '50px',
                    border: `2px solid ${isSearchFocused ? 'var(--gold)' : 'rgba(0,0,0,0.06)'}`,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    background: 'var(--cream)',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxShadow: isSearchFocused ? '0 0 0 4px rgba(212,175,55,0.08)' : 'none',
                  }}
                />
                {searchTerm && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--coffee-light)',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      padding: '4px',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{ color: 'var(--burgundy)', scale: 1.1 }}
                  >
                    <MdClear />
                  </motion.button>
                )}
              </div>

              {/* Filter Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{
                  padding: '0.7rem 1.5rem',
                  borderRadius: '50px',
                  border: `2px solid ${isFilterOpen ? 'var(--gold)' : 'rgba(0,0,0,0.06)'}`,
                  background: isFilterOpen ? 'var(--gold-pale)' : 'var(--white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: isFilterOpen ? 'var(--primary)' : 'var(--coffee-light)',
                  whiteSpace: 'nowrap',
                }}
              >
                <FaFilter size={14} />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                {activeCategory !== 'all' && (
                  <span style={{
                    background: 'var(--gold)',
                    color: 'var(--dark)',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '20px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                  }}>
                    {activeCategory}
                  </span>
                )}
              </motion.button>

              {/* Clear All Button */}
              {(activeCategory !== 'all' || searchTerm) && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  style={{
                    padding: '0.7rem 1.2rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'rgba(0,0,0,0.04)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: 'var(--coffee-light)',
                  }}
                >
                  <FaTimes size={12} /> Clear All
                </motion.button>
              )}
            </div>

            {/* Filter Bar */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: '1rem' }}>
                    <MenuFilter
                      categories={menuData.categories}
                      activeCategory={activeCategory}
                      onCategoryChange={setActiveCategory}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ===== RESULTS INFO ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2rem',
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MdRestaurantMenu size={20} color="var(--gold)" />
              <span style={{ color: 'var(--coffee-light)', fontSize: '0.9rem', fontWeight: 500 }}>
                <strong style={{ color: 'var(--primary)' }}>{activeItemCount}</strong> items found
                {activeCategory !== 'all' && (
                  <span style={{ color: 'var(--gold)', marginLeft: '0.5rem' }}>
                    in {getCategoryLabel(activeCategory)}
                  </span>
                )}
                {searchTerm && (
                  <span style={{ color: 'var(--coffee-light)', marginLeft: '0.5rem', fontStyle: 'italic' }}>
                    matching "{searchTerm}"
                  </span>
                )}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {activeCategory !== 'all' && (
                <span style={{
                  fontSize: '0.7rem',
                  background: 'var(--gold-pale)',
                  padding: '0.2rem 0.8rem',
                  borderRadius: '20px',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}>
                  <FaInfoCircle size={10} /> {getCategoryCount(activeCategory)} total in this category
                </span>
              )}
            </div>
          </motion.div>

          {/* ===== MENU ITEMS ===== */}
          {Object.keys(groupedItems).length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.03)',
              }}
            >
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>😅</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: 'var(--primary)',
                marginBottom: '0.5rem',
              }}>
                No items found
              </h3>
              <p style={{ color: 'var(--coffee-light)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Try adjusting your search or filters
              </p>
              <button
                onClick={clearFilters}
                style={{
                  padding: '0.7rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'var(--gradient-gold)',
                  color: 'var(--dark)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            Object.keys(groupedItems).map((category, index) => (
              <MenuToggle
                key={category}
                title={getCategoryLabel(category)}
                icon={getCategoryIcon(category)}
                defaultOpen={activeCategory === category || activeCategory === 'all'}
                count={groupedItems[category].length}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.5rem',
                }}>
                  {groupedItems[category].map((item, itemIndex) => (
                    <MenuItem key={item.id} item={item} index={itemIndex} />
                  ))}
                </div>
              </MenuToggle>
            ))
          )}

          {/* ===== DIETARY INFO ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: '3rem',
              padding: '1.5rem 2rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(0,0,0,0.03)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--coffee-light)',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>🌱 Dietary Icons:</span>
                <span style={{ background: 'rgba(0,0,0,0.03)', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>Vegan</span>
                <span style={{ background: 'rgba(0,0,0,0.03)', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>Vegetarian</span>
                <span style={{ background: 'rgba(0,0,0,0.03)', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>Gluten-Free</span>
                <span style={{ background: 'rgba(0,0,0,0.03)', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>🌶️ Spice Levels</span>
              </p>
            </div>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--coffee-light)',
              margin: 0,
              opacity: 0.7,
            }}>
              All allergens available upon request
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== BACK TO TOP BUTTON ===== */}
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
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;