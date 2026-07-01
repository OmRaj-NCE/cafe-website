// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', value: '+33 1 23 45 67 89', action: 'tel:+33123456789' },
    { icon: <FaEnvelope />, title: 'Email', value: 'hello@cafeelgance.com', action: 'mailto:hello@cafeelgance.com' },
    { icon: <FaMapMarkerAlt />, title: 'Address', value: '123 Coffee Lane, Paris, France', action: 'https://maps.google.com' },
    { icon: <FaClock />, title: 'Hours', value: 'Mon-Sun: 7:00 AM - 10:00 PM' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <FaFacebook />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <FaYoutube />, label: 'YouTube', url: 'https://youtube.com' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Café Élégance — Get in Touch</title>
        <meta name="description" content="Contact Café Élégance. Reach out for reservations, inquiries, or just to say hello. We'd love to hear from you." />
        <meta property="og:title" content="Contact Us | Café Élégance" />
        <meta property="og:description" content="Get in touch with us for reservations, events, or any questions." />
        <link rel="canonical" href="https://cafeelgance.com/contact" />
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
            Get in <span style={{ color: 'var(--gold)' }}>Touch</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                Let's <span style={{ color: 'var(--gold)' }}>Connect</span>
              </h2>
              <p style={{ color: 'var(--coffee-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Whether you have a question about our menu, want to book a table, or just want to share your feedback — we're here for you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--gold-pale)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      color: 'var(--gold)',
                      flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--coffee-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {info.title}
                      </p>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.title === 'Address' ? '_blank' : '_self'}
                          rel={info.title === 'Address' ? 'noopener noreferrer' : ''}
                          style={{
                            color: 'var(--primary)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--primary)', fontWeight: 500 }}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: 'var(--coffee-light)', marginBottom: '1rem' }}>Follow us on social media</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        fontSize: '1.2rem',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--gradient-gold)';
                        e.target.style.color = 'var(--dark)';
                        e.target.style.boxShadow = 'var(--shadow-warm)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--white)';
                        e.target.style.color = 'var(--primary)';
                        e.target.style.boxShadow = 'var(--shadow-sm)';
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--coffee-light)', marginBottom: '1.5rem' }}>
                We'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
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

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
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

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
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

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="4"
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

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: 'var(--gradient-gold)',
                    color: 'var(--dark)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <MdArrowForward />
                    </>
                  )}
                </motion.button>

                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--coffee-light)' }}>
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;