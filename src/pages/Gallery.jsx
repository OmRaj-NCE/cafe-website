// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaTimes, FaChevronLeft, FaChevronRight, FaInstagram, FaHeart } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    // Coffee & Drinks
    { id: 1, src: '/images/gallery/coffee-pour.jpg', category: 'coffee', title: 'Perfect Pour', description: 'Art of espresso extraction' },
    { id: 2, src: '/images/gallery/latte-art.jpg', category: 'coffee', title: 'Latte Art', description: 'Floral pattern masterpiece' },
    { id: 3, src: '/images/gallery/cold-brew.jpg', category: 'coffee', title: 'Cold Brew', description: 'Smooth and refreshing' },
    
    // Food
    { id: 4, src: '/images/gallery/croissant.jpg', category: 'food', title: 'Butter Croissant', description: 'Flaky and golden' },
    { id: 5, src: '/images/gallery/avocado-toast.jpg', category: 'food', title: 'Avocado Toast', description: 'Healthy and delicious' },
    { id: 6, src: '/images/gallery/tiramisu.jpg', category: 'food', title: 'Tiramisu', description: 'Classic Italian dessert' },
    
    // Interior
    { id: 7, src: '/images/gallery/interior-1.jpg', category: 'interior', title: 'Cozy Corner', description: 'Warm and inviting atmosphere' },
    { id: 8, src: '/images/gallery/interior-2.jpg', category: 'interior', title: 'Bar Area', description: 'Where magic happens' },
    { id: 9, src: '/images/gallery/interior-3.jpg', category: 'interior', title: 'Outdoor Seating', description: 'Perfect for sunny days' },
    
    // Events
    { id: 10, src: '/images/gallery/event-1.jpg', category: 'events', title: 'Coffee Tasting', description: 'Exploring flavor profiles' },
    { id: 11, src: '/images/gallery/event-2.jpg', category: 'events', title: 'Live Music', description: 'Jazz nights at the cafe' },
    { id: 12, src: '/images/gallery/event-3.jpg', category: 'events', title: 'Workshop', description: 'Brewing techniques' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: '☕ Coffee' },
    { id: 'food', label: '🍽️ Food' },
    { id: 'interior', label: '🏠 Interior' },
    { id: 'events', label: '🎪 Events' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      coffee: '#6F4E37',
      food: '#F9A825',
      interior: '#4CAF50',
      events: '#E53935',
    };
    return colors[category] || '#333';
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Café Élégance — Visual Journey</title>
        <meta name="description" content="Explore the visual story of Café Élégance. From coffee artistry to interior ambiance, experience our world through stunning imagery." />
        <meta property="og:title" content="Gallery | Café Élégance" />
        <meta property="og:description" content="A visual journey through our coffee artistry and warm ambiance." />
        <link rel="canonical" href="https://cafeelgance.com/gallery" />
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
            Our <span style={{ color: 'var(--gold)' }}>Gallery</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            A visual journey through our coffee artistry, culinary creations, and warm ambiance.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '3rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  border: filter === cat.id ? '2px solid var(--gold)' : '2px solid transparent',
                  background: filter === cat.id ? 'var(--gradient-gold)' : 'var(--white)',
                  color: filter === cat.id ? 'var(--dark)' : 'var(--coffee)',
                  fontWeight: filter === cat.id ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: filter === cat.id ? 'var(--shadow-warm)' : 'var(--shadow-sm)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: 'var(--white)',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onClick={() => setSelectedImage(image)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                >
                  {/* Image Placeholder */}
                  <div style={{
                    height: '250px',
                    background: `linear-gradient(135deg, ${getCategoryColor(image.category)} 0%, ${getCategoryColor(image.category)}CC 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative',
                  }}>
                    {image.category === 'coffee' && '☕'}
                    {image.category === 'food' && '🍽️'}
                    {image.category === 'interior' && '🏠'}
                    {image.category === 'events' && '🎪'}
                    
                    {/* Category Badge */}
                    <span style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backdropFilter: 'blur(4px)',
                    }}>
                      {image.category}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    color: 'white',
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                      {image.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{image.description}</p>
                  </div>

                  {/* Hover Zoom Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(255,255,255,0.9)',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '50px',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      pointerEvents: 'none',
                    }}
                  >
                    🔍 View
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Instagram Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p style={{ color: 'var(--coffee-light)', marginBottom: '1rem' }}>
              Follow us on Instagram for daily coffee inspiration
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                background: 'var(--gradient-gold)',
                color: 'var(--dark)',
                fontWeight: 600,
                textDecoration: 'none',
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
              <FaInstagram /> @cafeelgance
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  border: 'none',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  zIndex: 10,
                  transition: 'background 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,0,0,0.6)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
              >
                <FaTimes />
              </button>

              {/* Image Content */}
              <div style={{
                height: '500px',
                background: `linear-gradient(135deg, ${getCategoryColor(selectedImage.category)} 0%, ${getCategoryColor(selectedImage.category)}CC 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
              }}>
                {selectedImage.category === 'coffee' && '☕'}
                {selectedImage.category === 'food' && '🍽️'}
                {selectedImage.category === 'interior' && '🏠'}
                {selectedImage.category === 'events' && '🎪'}
              </div>

              {/* Info */}
              <div style={{ padding: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--primary)' }}>
                  {selectedImage.title}
                </h2>
                <p style={{ color: 'var(--coffee-light)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {selectedImage.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 1rem',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${getCategoryColor(selectedImage.category)} 0%, ${getCategoryColor(selectedImage.category)}CC 100%)`,
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {selectedImage.category}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                  setSelectedImage(filteredImages[prevIndex]);
                }}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(filteredImages[nextIndex]);
                }}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;