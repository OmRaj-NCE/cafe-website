// src/pages/Reservation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useReservation } from '../context/ReservationContext';
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaClock, FaUsers, FaComment } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import toast from 'react-hot-toast';

const Reservation = () => {
  const { createReservation } = useReservation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    occasion: 'dining',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      createReservation(formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: 2,
        occasion: 'dining',
        specialRequests: '',
      });
      toast.success('Reservation confirmed! Check your email.');
    }, 1500);
  };

  const occasions = [
    { id: 'dining', label: 'Dining', icon: '🍽️' },
    { id: 'date', label: 'Date Night', icon: '🌹' },
    { id: 'celebration', label: 'Celebration', icon: '🎉' },
    { id: 'business', label: 'Business Meeting', icon: '💼' },
    { id: 'event', label: 'Private Event', icon: '🎪' },
  ];

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
  ];

  return (
    <>
      <Helmet>
        <title>Reserve a Table | Café Élégance — Book Your Experience</title>
        <meta name="description" content="Reserve your table at Café Élégance. Book online for an unforgettable dining experience with premium coffee and cuisine." />
        <meta property="og:title" content="Reserve a Table | Café Élégance" />
        <meta property="og:description" content="Book your table and experience the art of fine coffee and dining." />
        <link rel="canonical" href="https://cafeelgance.com/reservation" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          padding: '8rem 2rem 4rem',
          background: 'var(--gradient-dark)',
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
            Reserve Your <span style={{ color: 'var(--gold)' }}>Table</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            Book your table and let us craft an unforgettable experience for you.
          </p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--primary)' }}>
                Book Your Experience
              </h2>
              <p style={{ color: 'var(--coffee-light)' }}>We can't wait to welcome you</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  <FaUser style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid rgba(0,0,0,0.08)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                />
              </div>

              {/* Phone & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <FaPhone style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <FaEnvelope style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <FaCalendar style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <FaClock style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      cursor: 'pointer',
                      background: 'var(--white)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests & Occasion */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    <FaUsers style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                    Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min={1}
                    max={20}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      cursor: 'pointer',
                      background: 'var(--white)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                  >
                    {occasions.map(occ => (
                      <option key={occ.id} value={occ.id}>{occ.icon} {occ.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  <FaComment style={{ marginRight: '0.5rem', color: 'var(--gold)' }} />
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests? Dietary needs, seating preferences, celebrations..."
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid rgba(0,0,0,0.08)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--gradient-gold)',
                  color: 'var(--dark)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.boxShadow = 'var(--shadow-glow)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="loader" style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '20px',
                      border: '2px solid var(--dark)',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spinLoader 0.8s linear infinite',
                    }} />
                    Processing...
                  </>
                ) : (
                  <>
                    Reserve Table <MdArrowForward />
                  </>
                )}
              </motion.button>

              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--coffee-light)' }}>
                We'll confirm your reservation within 30 minutes
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Reservation;