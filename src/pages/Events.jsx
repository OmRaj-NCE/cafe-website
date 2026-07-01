// src/pages/Events.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUser, FaTicketAlt } from 'react-icons/fa';

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Coffee Tasting Workshop',
      description: 'Learn to identify flavor notes and appreciate the complexity of specialty coffee.',
      date: '2024-12-20',
      time: '10:00 AM - 12:00 PM',
      location: 'Café Élégance Main Hall',
      price: 'Free',
      capacity: 20,
      registered: 12,
      category: 'Workshop',
      image: '👃',
    },
    {
      id: 2,
      title: 'Live Jazz Night',
      description: 'Enjoy an evening of smooth jazz with our signature coffee cocktails.',
      date: '2024-12-22',
      time: '7:00 PM - 10:00 PM',
      location: 'Café Élégance Lounge',
      price: '$15',
      capacity: 50,
      registered: 35,
      category: 'Music',
      image: '🎷',
    },
    {
      id: 3,
      title: 'Barista Championship',
      description: 'Watch our baristas compete in the ultimate coffee-making challenge.',
      date: '2024-12-28',
      time: '2:00 PM - 5:00 PM',
      location: 'Café Élégance Stage',
      price: 'Free',
      capacity: 30,
      registered: 18,
      category: 'Competition',
      image: '🏆',
    },
    {
      id: 4,
      title: 'New Year Celebration',
      description: 'Ring in the New Year with our special midnight coffee toast and celebration.',
      date: '2025-01-01',
      time: '11:00 PM - 2:00 AM',
      location: 'Café Élégance Garden',
      price: '$25',
      capacity: 80,
      registered: 60,
      category: 'Celebration',
      image: '🎉',
    },
    {
      id: 5,
      title: 'Pastry Making Class',
      description: 'Learn to bake our famous croissants and pain au chocolat.',
      date: '2025-01-05',
      time: '9:00 AM - 12:00 PM',
      location: 'Café Élégance Kitchen',
      price: '$40',
      capacity: 15,
      registered: 8,
      category: 'Workshop',
      image: '🥐',
    },
  ];

  const months = ['all', 'December', 'January'];

  const filteredEvents = selectedMonth === 'all' 
    ? events 
    : events.filter(e => new Date(e.date).toLocaleString('default', { month: 'long' }) === selectedMonth);

  return (
    <>
      <Helmet>
        <title>Events | Café Élégance — Workshops, Live Music & More</title>
        <meta name="description" content="Discover upcoming events at Café Élégance. Coffee workshops, live music, tasting sessions, and special celebrations." />
        <meta property="og:title" content="Events | Café Élégance" />
        <meta property="og:description" content="Join us for workshops, live music, and special celebrations." />
        <link rel="canonical" href="https://cafeelgance.com/events" />
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
            Upcoming <span style={{ color: 'var(--gold)' }}>Events</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            Join us for workshops, live music, and special celebrations
          </p>
        </motion.div>
      </section>

      {/* Events Section */}
      <section style={{ padding: '3rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Month Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {months.map(month => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  border: selectedMonth === month ? '2px solid var(--gold)' : '2px solid transparent',
                  background: selectedMonth === month ? 'var(--gradient-gold)' : 'var(--white)',
                  color: selectedMonth === month ? 'var(--dark)' : 'var(--coffee)',
                  fontWeight: selectedMonth === month ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedMonth === month ? 'var(--shadow-warm)' : 'var(--shadow-sm)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {month === 'all' ? '📅 All Events' : month}
              </button>
            ))}
          </motion.div>

          {/* Events List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Date */}
                <div style={{
                  textAlign: 'center',
                  padding: '0.5rem',
                  background: 'var(--gold-pale)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)' }}>
                    {new Date(event.date).getDate()}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--coffee)' }}>
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                  </div>
                </div>

                {/* Event Info */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      background: 'var(--gold-pale)',
                      color: 'var(--gold)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {event.category}
                    </span>
                    <span style={{ fontSize: '2rem' }}>{event.image}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--primary)', margin: '0.5rem 0 0.25rem' }}>
                    {event.title}
                  </h3>
                  <p style={{ color: 'var(--coffee-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {event.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--coffee-light)' }}>
                    <span><FaClock style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {event.time}</span>
                    <span><FaMapMarkerAlt style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {event.location}</span>
                    <span><FaUser style={{ marginRight: '0.3rem', color: 'var(--gold)' }} /> {event.registered}/{event.capacity} registered</span>
                  </div>
                </div>

                {/* Action */}
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    marginBottom: '0.5rem',
                  }}>
                    {event.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderRadius: '50px',
                      border: 'none',
                      background: 'var(--gradient-gold)',
                      color: 'var(--dark)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <FaTicketAlt /> Register
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Events */}
          {filteredEvents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <span style={{ fontSize: '3rem' }}>📅</span>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', margin: '1rem 0' }}>
                No events in this month
              </h3>
              <p style={{ color: 'var(--coffee-light)' }}>Check back later for upcoming events</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;