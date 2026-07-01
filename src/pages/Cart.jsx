// src/pages/Cart.jsx - FULLY RESPONSIVE
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  FaTrash, 
  FaPlus, 
  FaMinus, 
  FaShoppingBag, 
  FaArrowLeft,
  FaCreditCard,
  FaTruck,
  FaGift,
  FaStar,
  FaCoffee
} from 'react-icons/fa';
import { MdRemoveShoppingCart, MdArrowForward, MdLocalOffer } from 'react-icons/md';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice, addToCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Calculate totals
  useEffect(() => {
    const subtotal = getTotalPrice();
    const fee = subtotal > 500 ? 0 : 50;
    setDeliveryFee(fee);
    setTotal(subtotal + fee);
  }, [cartItems, getTotalPrice]);

  // Handle resize for responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Indian currency formatter
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    
    setIsCheckingOut(true);
    setTimeout(() => {
      toast.success('🎉 Order placed successfully! Check your email for confirmation.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  // Handle quantity change
  const handleQuantityChange = (item, action) => {
    if (action === 'increase') {
      addToCart(item);
    } else {
      removeFromCart(item.id);
    }
  };

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Your Cart | Café Élégance</title>
          <meta name="description" content="Your shopping cart at Café Élégance. Review your items and proceed to checkout." />
        </Helmet>

        <section style={{
          padding: '10rem 1.5rem 6rem',
          background: 'var(--cream)',
          textAlign: 'center',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              width: '100%',
              padding: '0 1rem',
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -5, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '5rem', marginBottom: '1.5rem' }}
            >
              🛒
            </motion.div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              color: 'var(--primary)',
              marginBottom: '0.5rem',
            }}>
              Your Cart is <span style={{ color: 'var(--gold)' }}>Empty</span>
            </h2>
            <p style={{
              color: 'var(--coffee-light)',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              marginBottom: '2rem',
              lineHeight: 1.8,
            }}>
              Looks like you haven't added any items yet. 
              Explore our menu and discover something delicious!
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
            }}>
              <Link
                to="/menu"
                className="btn btn-primary"
                style={{
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  borderRadius: '50px',
                  background: 'var(--gradient-gold)',
                  color: 'var(--dark)',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
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
                Browse Menu <MdArrowForward />
              </Link>
              <Link
                to="/"
                style={{
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                  borderRadius: '50px',
                  border: '2px solid var(--coffee-light)',
                  color: 'var(--coffee-light)',
                  background: 'transparent',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--gold)';
                  e.target.style.color = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--coffee-light)';
                  e.target.style.color = 'var(--coffee-light)';
                }}
              >
                <FaArrowLeft /> Continue Shopping
              </Link>
            </div>

            {/* Featured Items */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
              <p style={{ color: 'var(--coffee-light)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                ✦ Popular picks you might like
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
              }}>
                {['☕ Filter Coffee', '🍵 Masala Chai', '🥐 Butter Croissant', '🍛 Biryani'].map((item, i) => (
                  <span key={i} style={{
                    background: 'var(--white)',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                    color: 'var(--coffee)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid rgba(0,0,0,0.03)',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Your Cart | Café Élégance — Review & Checkout</title>
        <meta name="description" content="Review your items, adjust quantities, and proceed to checkout at Café Élégance." />
      </Helmet>

      {/* Page Hero */}
      <section style={{
        padding: '8rem 1.5rem 3rem',
        background: 'var(--gradient-warm)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(212,175,55,0.15)',
            padding: '0.4rem 1.2rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            border: '1px solid rgba(212,175,55,0.2)',
          }}>
            <span style={{ color: 'var(--gold)', fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <FaShoppingBag style={{ marginRight: '0.5rem' }} />
              {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--cream)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}>
            Your <span style={{ color: 'var(--gold)' }}>Cart</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px',
            margin: '0.5rem auto 0',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          }}>
            Review your selections before checkout
          </p>
        </motion.div>
      </section>

      {/* Cart Section */}
      <section style={{ padding: '2rem 1.5rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Continue Shopping Link */}
          <Link
            to="/menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--coffee-light)',
              textDecoration: 'none',
              fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)',
              marginBottom: '2rem',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--coffee-light)'}
          >
            <FaArrowLeft /> Continue Shopping
          </Link>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
            gap: '2rem',
            alignItems: 'start',
          }}>
            {/* ===== CART ITEMS ===== */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '2px solid rgba(0,0,0,0.04)',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  color: 'var(--primary)',
                  margin: 0,
                }}>
                  Your Items
                </h2>
                <button
                  onClick={() => {
                    if (window.confirm('Clear all items from your cart?')) {
                      clearCart();
                    }
                  }}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    border: '1px solid #e53935',
                    background: 'transparent',
                    color: '#e53935',
                    fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e53935';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#e53935';
                  }}
                >
                  <FaTrash style={{ marginRight: '0.3rem' }} /> Clear All
                </button>
              </div>

              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{
                      background: 'var(--white)',
                      borderRadius: 'var(--radius-lg)',
                      padding: isMobile ? '1rem' : '1.25rem 1.5rem',
                      marginBottom: '1rem',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid rgba(0,0,0,0.02)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'stretch' : 'center',
                      gap: isMobile ? '0.75rem' : '1rem',
                    }}>
                      {/* Item Icon */}
                      <div style={{
                        width: isMobile ? '48px' : '56px',
                        height: isMobile ? '48px' : '56px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--gradient-warm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: isMobile ? '1.3rem' : '1.6rem',
                        flexShrink: 0,
                        alignSelf: isMobile ? 'center' : 'center',
                      }}>
                        {item.category === 'coffee' && '☕'}
                        {item.category === 'tea' && '🍵'}
                        {item.category === 'breakfast' && '🌅'}
                        {item.category === 'lunch' && '🍛'}
                        {item.category === 'snacks' && '🧆'}
                        {item.category === 'sweets' && '🍬'}
                        {item.category === 'beverages' && '🥤'}
                        {item.category === 'breads' && '🥖'}
                        {!['coffee','tea','breakfast','lunch','snacks','sweets','beverages','breads'].includes(item.category) && '🍽️'}
                      </div>

                      {/* Item Details */}
                      <div style={{ 
                        flex: 1, 
                        minWidth: 0,
                        textAlign: isMobile ? 'center' : 'left',
                      }}>
                        <h4 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: isMobile ? '0.95rem' : '1rem',
                          color: 'var(--primary)',
                          margin: 0,
                        }}>
                          {item.name}
                        </h4>
                        <p style={{
                          color: 'var(--coffee-light)',
                          fontSize: isMobile ? '0.7rem' : '0.75rem',
                          margin: '0.15rem 0 0.3rem',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: isMobile ? 'normal' : 'nowrap',
                        }}>
                          {item.description.length > 40 ? item.description.substring(0, 40) + '...' : item.description}
                        </p>
                        <span style={{
                          color: 'var(--gold)',
                          fontWeight: 600,
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                        }}>
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        gap: '0.5rem',
                        marginTop: isMobile ? '0.5rem' : '0',
                      }}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleQuantityChange(item, 'decrease')}
                          style={{
                            width: isMobile ? '32px' : '30px',
                            height: isMobile ? '32px' : '30px',
                            borderRadius: '50%',
                            border: '1px solid var(--gold)',
                            background: 'transparent',
                            color: 'var(--gold)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'var(--gold)';
                            e.target.style.color = 'var(--dark)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--gold)';
                          }}
                        >
                          {item.quantity > 1 ? <FaMinus size={isMobile ? 12 : 10} /> : <FaTrash size={isMobile ? 12 : 10} />}
                        </motion.button>

                        <span style={{
                          fontWeight: 600,
                          minWidth: '24px',
                          textAlign: 'center',
                          fontSize: isMobile ? '0.9rem' : '0.95rem',
                          color: 'var(--primary)',
                        }}>
                          {item.quantity}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleQuantityChange(item, 'increase')}
                          style={{
                            width: isMobile ? '32px' : '30px',
                            height: isMobile ? '32px' : '30px',
                            borderRadius: '50%',
                            border: 'none',
                            background: 'var(--gradient-gold)',
                            color: 'var(--dark)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          <FaPlus size={isMobile ? 12 : 10} />
                        </motion.button>
                      </div>

                      {/* Item Total */}
                      <div style={{
                        textAlign: isMobile ? 'center' : 'right',
                        borderTop: isMobile ? '1px solid rgba(0,0,0,0.04)' : 'none',
                        paddingTop: isMobile ? '0.5rem' : '0',
                        marginTop: isMobile ? '0.5rem' : '0',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: isMobile ? '1rem' : '1.05rem',
                          fontWeight: 700,
                          color: 'var(--primary)',
                        }}>
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ===== ORDER SUMMARY ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: isMobile ? 'relative' : 'sticky',
                top: isMobile ? '0' : '100px',
                width: '100%',
              }}
            >
              <div style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: isMobile ? '1.25rem' : '1.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(0,0,0,0.03)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <FaShoppingBag size={isMobile ? 16 : 18} /> Order Summary
                </h3>

                {/* Items List */}
                <div style={{ 
                  marginBottom: '1rem', 
                  maxHeight: isMobile ? '150px' : '200px', 
                  overflowY: 'auto',
                }}>
                  {cartItems.map((item) => (
                    <div key={item.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid rgba(0,0,0,0.02)',
                      fontSize: isMobile ? '0.8rem' : '0.85rem',
                    }}>
                      <span style={{ color: 'var(--coffee)' }}>
                        {item.name} × {item.quantity}
                      </span>
                      <span style={{ fontWeight: 600, color: 'var(--primary)' }}>
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div style={{ marginTop: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    color: 'var(--coffee-light)',
                  }}>
                    <span>Subtotal</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    color: 'var(--coffee-light)',
                  }}>
                    <span>
                      <FaTruck size={isMobile ? 10 : 12} style={{ marginRight: '0.3rem' }} />
                      Delivery
                    </span>
                    <span style={{ color: deliveryFee === 0 ? 'var(--gold)' : 'var(--coffee-light)' }}>
                      {deliveryFee === 0 ? 'FREE 🎉' : formatPrice(deliveryFee)}
                    </span>
                  </div>

                  {deliveryFee === 0 && getTotalPrice() > 0 && (
                    <div style={{
                      background: 'var(--gold-pale)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: isMobile ? '0.65rem' : '0.7rem',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      display: 'inline-block',
                      marginTop: '0.25rem',
                      width: '100%',
                      textAlign: 'center',
                    }}>
                      ✦ Free delivery on orders above ₹500
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    marginTop: '0.5rem',
                    borderTop: '2px solid var(--gold)',
                    fontSize: isMobile ? '1rem' : '1.15rem',
                    fontWeight: 700,
                  }}>
                    <span style={{ color: 'var(--primary)' }}>Total</span>
                    <span style={{ color: 'var(--gold)' }}>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  disabled={isCheckingOut || cartItems.length === 0}
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.9rem' : '1rem',
                    marginTop: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: isCheckingOut ? 'var(--coffee-light)' : 'var(--gradient-gold)',
                    color: isCheckingOut ? 'var(--cream)' : 'var(--dark)',
                    fontWeight: 700,
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    cursor: isCheckingOut || cartItems.length === 0 ? 'not-allowed' : 'pointer',
                    opacity: isCheckingOut || cartItems.length === 0 ? 0.6 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: isCheckingOut ? 'none' : 'var(--shadow-warm)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isCheckingOut && cartItems.length > 0) {
                      e.target.style.boxShadow = 'var(--shadow-glow)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCheckingOut && cartItems.length > 0) {
                      e.target.style.boxShadow = 'var(--shadow-warm)';
                    }
                  }}
                >
                  {isCheckingOut ? (
                    <>
                      <span className="loader" style={{
                        display: 'inline-block',
                        width: '18px',
                        height: '18px',
                        border: '2px solid var(--dark)',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spinLoader 0.8s linear infinite',
                      }} />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCreditCard /> Place Order
                    </>
                  )}
                </motion.button>

                {/* Trust Badges */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: isMobile ? '0.5rem' : '1rem',
                  marginTop: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontSize: isMobile ? '0.55rem' : '0.65rem',
                    color: 'var(--coffee-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}>
                    🔒 Secure Checkout
                  </span>
                  <span style={{
                    fontSize: isMobile ? '0.55rem' : '0.65rem',
                    color: 'var(--coffee-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}>
                    🚚 Free Delivery &gt; ₹500
                  </span>
                  <span style={{
                    fontSize: isMobile ? '0.55rem' : '0.65rem',
                    color: 'var(--coffee-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}>
                    ✦ 10% off on first order
                  </span>
                </div>

                {/* Return Policy */}
                <p style={{
                  textAlign: 'center',
                  marginTop: '1rem',
                  fontSize: isMobile ? '0.6rem' : '0.7rem',
                  color: 'var(--coffee-light)',
                  opacity: 0.6,
                }}>
                  Easy returns within 30 minutes • Support available 24/7
                </p>
              </div>

              {/* Promo Code */}
              <div style={{
                marginTop: '1rem',
                padding: isMobile ? '0.75rem' : '1rem',
                background: 'var(--cream)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--gold)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  color: 'var(--coffee-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}>
                  <MdLocalOffer color="var(--gold)" />
                  Have a promo code? Apply at checkout
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add responsive styles */}
      <style>
        {`
          @media (max-width: 480px) {
            .btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Cart;