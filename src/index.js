// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/global.css';

// Hide loading placeholder when app mounts
const hideLoading = () => {
  const placeholder = document.getElementById('loading-placeholder');
  if (placeholder) {
    placeholder.classList.add('hidden');
    setTimeout(() => {
      placeholder.style.display = 'none';
    }, 500);
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Hide loading placeholder after render
setTimeout(hideLoading, 100);