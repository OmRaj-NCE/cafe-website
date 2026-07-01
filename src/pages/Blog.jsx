// src/pages/Blog.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaUser, FaClock, FaTag, FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Pour-Over Coffee',
      excerpt: 'Master the pour-over method with our step-by-step guide to brewing the perfect cup.',
      category: 'Coffee',
      author: 'Jean-Pierre Dubois',
      date: 'December 15, 2024',
      readTime: '5 min read',
      image: '☕',
      featured: true,
    },
    {
      id: 2,
      title: 'Sustainable Coffee Farming',
      excerpt: 'Exploring ethical sourcing and the future of sustainable coffee production.',
      category: 'Sustainability',
      author: 'David Chen',
      date: 'December 10, 2024',
      readTime: '7 min read',
      image: '🌱',
      featured: false,
    },
    {
      id: 3,
      title: 'Perfect Pastry Pairings',
      excerpt: 'Discover the art of pairing our signature pastries with the perfect coffee.',
      category: 'Food',
      author: 'Maria Santos',
      date: 'December 5, 2024',
      readTime: '4 min read',
      image: '🥐',
      featured: true,
    },
    {
      id: 4,
      title: 'Coffee Tasting 101',
      excerpt: 'Learn how to identify flavor notes and appreciate the complexity of specialty coffee.',
      category: 'Coffee',
      author: 'Jean-Pierre Dubois',
      date: 'November 28, 2024',
      readTime: '6 min read',
      image: '👃',
      featured: false,
    },
    {
      id: 5,
      title: 'Behind the Bar: A Day in the Life',
      excerpt: 'Follow our head barista through a day of crafting exceptional coffee experiences.',
      category: 'Culture',
      author: 'Sophie Martin',
      date: 'November 20, 2024',
      readTime: '8 min read',
      image: '👨‍🍳',
      featured: false,
    },
    {
      id: 6,
      title: 'Holiday Coffee Recipes',
      excerpt: 'Warm up with our favorite holiday coffee recipes that will delight your guests.',
      category: 'Recipes',
      author: 'Maria Santos',
      date: 'December 1, 2024',
      readTime: '3 min read',
      image: '🎄',
      featured: true,
    },
  ];

  const categories = ['all', 'Coffee', 'Sustainability', 'Food', 'Culture', 'Recipes'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Café Élégance — Coffee Stories & Insights</title>
        <meta name="description" content="Explore stories, tips, and insights from the world of specialty coffee. From brewing guides to sustainability, discover the art of coffee." />
        <meta property="og:title" content="Blog | Café Élégance" />
        <meta property="og:description" content="Coffee stories, brewing guides, and sustainability insights from our experts." />
        <link rel="canonical" href="https://cafeelgance.com/blog" />
      </Helmet>

      {/* Hero */}
      <section style={{
        padding: '8rem 2rem 4rem',
        background: 'var(--gradient-warm)',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Coffee <span style={{ color: 'var(--gold)' }}>Stories</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            Insights, tips, and stories from the heart of our coffee culture.
          </p>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section style={{ padding: '3rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    borderRadius: '50px',
                    border: selectedCategory === cat ? '2px solid var(--gold)' : '2px solid transparent',
                    background: selectedCategory === cat ? 'var(--gradient-gold)' : 'var(--white)',
                    color: selectedCategory === cat ? 'var(--dark)' : 'var(--coffee)',
                    fontWeight: selectedCategory === cat ? 700 : 500,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedCategory === cat ? 'var(--shadow-warm)' : 'var(--shadow-sm)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {cat === 'all' ? '📚 All' : cat}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', minWidth: '200px' }}>
              <FaSearch style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--coffee-light)' }} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem 0.6rem 2.5rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  background: 'var(--white)',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
              />
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && !searchTerm && selectedCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                marginBottom: '3rem',
              }}
            >
              <div style={{
                height: '200px',
                background: 'var(--gradient-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
              }}>
                {featuredPost.image}
              </div>
              <div style={{ padding: '2rem' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 1rem',
                  borderRadius: '20px',
                  background: 'var(--gradient-gold)',
                  color: 'var(--dark)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}>
                  ★ Featured
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: 'var(--coffee-light)', fontSize: '1rem', marginBottom: '1rem' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--coffee-light)' }}>
                  <span><FaUser style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {featuredPost.author}</span>
                  <span><FaCalendar style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {featuredPost.date}</span>
                  <span><FaClock style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {featuredPost.readTime}</span>
                  <span><FaTag style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {featuredPost.category}</span>
                </div>
                <button style={{
                  marginTop: '1.5rem',
                  padding: '0.7rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'var(--gradient-gold)',
                  color: 'var(--dark)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
                  Read Full Story →
                </button>
              </div>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredPosts
              .filter(post => !post.featured || searchTerm || selectedCategory !== 'all')
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                >
                  <div style={{
                    height: '140px',
                    background: `linear-gradient(135deg, var(--primary) 0%, var(--coffee) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.5rem',
                  }}>
                    {post.image}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      background: 'var(--gold-pale)',
                      color: 'var(--gold)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.75rem',
                    }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--coffee-light)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--coffee-light)' }}>
                      <span><FaUser style={{ marginRight: '0.3rem' }} /> {post.author}</span>
                      <span><FaClock style={{ marginRight: '0.3rem' }} /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <span style={{ fontSize: '3rem' }}>🔍</span>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', margin: '1rem 0' }}>
                No posts found
              </h3>
              <p style={{ color: 'var(--coffee-light)' }}>Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;