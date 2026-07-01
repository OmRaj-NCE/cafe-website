// src/pages/Menu.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';

import menuData from '../data/menuData';
import MenuItem from '../components/menu/MenuItem';
import MenuFilter from '../components/menu/MenuFilter';
import MenuToggle from '../components/menu/MenuToggle';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuData.items;
    
    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }
    
    // Filter by search
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return items;
  }, [activeCategory, searchTerm]);

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

  const getCategoryIcon = (category) => {
    const icons = {
      coffee: '☕',
      tea: '🍵',
      pastry: '🥐',
      breakfast: '🍳',
      lunch: '🥗',
      dessert: '🍰',
      beverages: '🥤',
    };
    return icons[category] || '🍽️';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      coffee: 'Coffee Collection',
      tea: 'Tea Selection',
      pastry: 'Fresh Pastries',
      breakfast: 'Breakfast Favorites',
      lunch: 'Lunch Specials',
      dessert: 'Decadent Desserts',
      beverages: 'Refreshing Beverages',
    };
    return labels[category] || category;
  };

  return (
    <>
      <Helmet>
        <title>Our Menu | Café Élégance — Premium Coffee & Pastries</title>
        <meta name="description" content="Explore our curated menu of premium coffee, artisanal teas, fresh pastries, and delicious meals. Every item crafted with love and precision." />
        <meta property="og:title" content="Our Menu | Café Élégance" />
        <meta property="og:description" content="Discover our award-winning coffee selection and freshly prepared dishes." />
        <link rel="canonical" href="https://cafeelgance.com/menu" />
      </Helmet>

      {/* Page Hero */}
      <section
        style={{
          padding: '8rem 2rem 4rem',
          background: 'var(--gradient-warm)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Our <span style={{ color: 'var(--gold)' }}>Menu</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            Every item tells a story. From bean to cup, from oven to plate — crafted with passion.
          </p>
        </motion.div>
      </section>

        // Add this after the hero section in Menu.jsx

{/* Indian Specials Banner */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  style={{
    background: 'var(--gradient-warm)',
    borderRadius: 'var(--radius-xl)',
    padding: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: 'var(--cream)',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div style={{
    position: 'absolute',
    inset: 0,
    background: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)`,
    pointerEvents: 'none',
  }} />
  <div style={{ position: 'relative', zIndex: 1 }}>
    <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🇮🇳</span>
    <h3 style={{
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--gold)',
      marginBottom: '0.5rem',
    }}>
      Taste of India
    </h3>
    <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
      Authentic Indian recipes passed down through generations, made with love and the finest ingredients.
    </p>
  </div>
</motion.div>

      {/* Menu Section */}
      <section style={{ padding: '3rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Search & Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                <FaSearch style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--coffee-light)' }} />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 2.5rem 0.8rem 3rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(0,0,0,0.08)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    background: 'var(--white)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--gold)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {searchTerm && (
                  <button
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
                      fontSize: '1.1rem',
                    }}
                  >
                    <MdClear />
                  </button>
                )}
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  background: 'var(--white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                }}
              >
                <FaFilter /> Filter
              </button>
            </div>

            {/* Filter Bar */}
            <motion.div
              initial={false}
              animate={isFilterOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', marginTop: '1rem' }}
            >
              <MenuFilter
                categories={menuData.categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </motion.div>
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--coffee-light)', fontSize: '0.9rem' }}>
              Showing {filteredItems.length} items
              {activeCategory !== 'all' && ` in ${getCategoryLabel(activeCategory)}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Menu Items - Grouped by Category */}
          {Object.keys(groupedItems).length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <span style={{ fontSize: '3rem' }}>😅</span>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', margin: '1rem 0' }}>
                No items found
              </h3>
              <p style={{ color: 'var(--coffee-light)' }}>Try adjusting your search or filters</p>
            </div>
          ) : (
            Object.keys(groupedItems).map((category) => (
              <MenuToggle
                key={category}
                title={getCategoryLabel(category)}
                icon={getCategoryIcon(category)}
                defaultOpen={activeCategory === category || activeCategory === 'all'}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                  {groupedItems[category].map((item, index) => (
                    <MenuItem key={item.id} item={item} index={index} />
                  ))}
                </div>
              </MenuToggle>
            ))
          )}

          {/* Dietary Info */}
          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--coffee-light)' }}>
              🌱 Dietary icons: <strong>Vegan</strong> · <strong>Vegetarian</strong> · <strong>Gluten-Free</strong> · <strong>Non-Vegetarian</strong>
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--coffee-light)', marginTop: '0.5rem' }}>
              All allergens available upon request. Please inform our staff of any dietary requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;