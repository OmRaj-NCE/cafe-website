// src/pages/Cart.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa';
import { MdArrowForward, MdRemoveShoppingCart } from 'react-icons/md';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = getTotalPrice();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      toast.success('Order placed! Check your email for confirmation.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart | Café Élégance</title>
          <meta name="description" content="Your shopping cart at Café Élégance. Review your items and proceed to checkout." />
        </Helmet>

        <section style={{
          padding: '10rem 2rem 6rem',
          background: 'var(--cream)',
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MdRemoveShoppingCart style={{ fontSize: '5rem', color: 'var(--gold)', marginBottom: '1rem' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              Your Cart is Empty
            </h2>
            <p style={{ color: 'var(--coffee-light)', marginBottom: '2rem' }}>
              Looks like you haven't added any items yet. Explore our menu!
            </p>
            <a
              href="/menu"
              className="btn btn-primary"
              style={{
                padding: '1rem 2.5rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              Browse Menu <MdArrowForward />
            </a>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart | Café Élégance — Review Your Order</title>
        <meta name="description" content="Review your items, adjust quantities, and proceed to checkout at Café Élégance." />
      </Helmet>

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
            Your <span style={{ color: 'var(--gold)' }}>Cart</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto 0' }}>
            Review your selections and proceed to checkout
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            {/* Cart Items */}
            <div>
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
                      padding: '1.5rem',
                      marginBottom: '1rem',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                  >
                    {/* Item Icon */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--gradient-warm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      flexShrink: 0,
                    }}>
                      🍽️
                    </div>

                    {/* Item Details */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--primary)' }}>
                        {item.name}
                      </h4>
                      <p style={{ color: 'var(--coffee-light)', fontSize: '0.85rem' }}>{item.description}</p>
                      <span style={{ color: 'var(--gold)', fontWeight: 700 }}>
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          width: '32px',
                          height: '32px',
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
                        {item.quantity > 1 ? <FaMinus size={10} /> : <FaTrash size={10} />}
                      </motion.button>

                      <span style={{ fontWeight: 600, minWidth: '24px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          // Add one more (reuse addToCart logic)
                          const cartContext = useCart();
                          cartContext.addToCart({ ...item, quantity: 1 });
                        }}
                        style={{
                          width: '32px',
                          height: '32px',
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
                        <FaPlus size={10} />
                      </motion.button>
                    </div>

                    {/* Item Total */}
                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Clear Cart */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (window.confirm('Clear all items from cart?')) {
                    clearCart();
                  }
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: '1px solid #e53935',
                  background: 'transparent',
                  color: '#e53935',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem',
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
                Clear Cart
              </motion.button>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                  Order Summary
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  {cartItems.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <span style={{ color: 'var(--coffee)' }}>
                        {item.name} × {item.quantity}
                      </span>
                      <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '2px solid var(--gold)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--coffee-light)' }}>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--coffee-light)' }}>Tax (10%)</span>
                    <span>${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>
                    <span style={{ color: 'var(--primary)' }}>Total</span>
                    <span style={{ color: 'var(--gold)' }}>${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'var(--gradient-gold)',
                    color: 'var(--dark)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: isCheckingOut ? 'not-allowed' : 'pointer',
                    opacity: isCheckingOut ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isCheckingOut ? (
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
                      <FaShoppingBag /> Proceed to Checkout
                    </>
                  )}
                </motion.button>

                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--coffee-light)' }}>
                  Secure checkout • Free delivery for orders over $30
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;