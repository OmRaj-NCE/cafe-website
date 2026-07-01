// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCoffee, FaAward, FaUsers, FaLeaf, FaStar, FaHeart, FaClock, FaGlobe } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    { name: 'Jean-Pierre Dubois', role: 'Head Barista', experience: '15 years', icon: '👨‍🍳' },
    { name: 'Maria Santos', role: 'Pastry Chef', experience: '12 years', icon: '👩‍🍳' },
    { name: 'David Chen', role: 'Coffee Roaster', experience: '10 years', icon: '🔥' },
    { name: 'Sophie Martin', role: 'Cafe Manager', experience: '8 years', icon: '👔' },
  ];

  const values = [
    { icon: <FaCoffee />, title: 'Quality First', desc: 'We source only the finest beans from sustainable farms worldwide.' },
    { icon: <FaLeaf />, title: 'Sustainability', desc: 'Committed to ethical sourcing and reducing our environmental footprint.' },
    { icon: <FaHeart />, title: 'Passion & Craft', desc: 'Every cup is crafted with love and precision by our expert baristas.' },
    { icon: <FaUsers />, title: 'Community', desc: 'We create a warm, welcoming space where everyone feels at home.' },
  ];

  const milestones = [
    { year: '2014', title: 'The Beginning', desc: 'Opened our first cafe with a vision of redefining coffee culture.' },
    { year: '2016', title: 'Award Winning', desc: 'Recognized as "Best Coffee House" by the National Coffee Association.' },
    { year: '2019', title: 'Global Reach', desc: 'Expanded to international markets with our signature coffee blends.' },
    { year: '2023', title: 'Innovation Hub', desc: 'Launched our coffee academy and training program for aspiring baristas.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Café Élégance — Our Story & Passion</title>
        <meta name="description" content="Discover the story behind Café Élégance. Our passion for coffee, commitment to quality, and journey from a dream to an award-winning cafe." />
        <meta property="og:title" content="About Us | Café Élégance" />
        <meta property="og:description" content="The story of passion, quality, and community behind every cup." />
        <link rel="canonical" href="https://cafeelgance.com/about" />
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
            Our <span style={{ color: 'var(--gold)' }}>Story</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            From a dream to an award-winning cafe — every cup tells a story of passion and dedication.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 2rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-cursive)', color: 'var(--gold)', fontSize: '1.5rem' }}>Our Journey</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                Crafting <span style={{ color: 'var(--gold)' }}>Excellence</span> Since 2014
              </h2>
              <p style={{ color: 'var(--coffee-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Café Élégance was born from a simple belief — that coffee is more than a drink; it's an experience, a ritual, a moment of pure joy.
              </p>
              <p style={{ color: 'var(--coffee-light)', lineHeight: '1.8' }}>
                What started as a small dream in a Parisian apartment has grown into an award-winning cafe that celebrates the art of coffee making.
              </p>
            </div>
            <div style={{
              background: 'var(--gradient-warm)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              textAlign: 'center',
              color: 'var(--cream)',
            }}>
              <span style={{ fontSize: '6rem', display: 'block' }}>☕</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginTop: '1rem' }}>10+ Years</h3>
              <p style={{ opacity: 0.8 }}>of serving excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '4rem 2rem', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="section-title">Our <span className="highlight">Values</span></h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'var(--cream)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--coffee-light)' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section style={{ padding: '4rem 2rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="section-title">Our <span className="highlight">Milestones</span></h2>
            <p className="section-subtitle">A journey of passion and growth</p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--gold)',
              opacity: 0.3,
            }} />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  marginBottom: '3rem',
                  position: 'relative',
                  paddingLeft: index % 2 !== 0 ? '3rem' : '0',
                  paddingRight: index % 2 === 0 ? '3rem' : '0',
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '0',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  border: '3px solid var(--cream)',
                  boxShadow: 'var(--shadow-md)',
                }} />

                <div style={{
                  background: 'var(--white)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  maxWidth: '400px',
                  width: '100%',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    marginBottom: '0.5rem',
                  }}>
                    {milestone.year}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary)' }}>
                    {milestone.title}
                  </h4>
                  <p style={{ color: 'var(--coffee-light)', fontSize: '0.9rem' }}>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '4rem 2rem', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="section-title">Meet Our <span className="highlight">Team</span></h2>
            <p className="section-subtitle">The passionate people behind every perfect cup</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--primary)' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--gold)', fontWeight: 600 }}>{member.role}</p>
                <p style={{ color: 'var(--coffee-light)', fontSize: '0.85rem' }}>{member.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--gradient-warm)',
        textAlign: 'center',
        color: 'var(--cream)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Join Our <span style={{ color: 'var(--gold)' }}>Family</span>
          </h2>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Visit us and experience the passion that makes Café Élégance extraordinary.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/reservation"
              className="btn btn-primary"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Reserve a Table
            </a>
            <a
              href="/contact"
              className="btn btn-outline"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                borderColor: 'var(--cream)',
                color: 'var(--cream)',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;