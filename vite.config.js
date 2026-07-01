import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'react-spring', 'lottie-react'],
          ui: ['react-icons', 'react-modal', 'react-select'],
          forms: ['react-hook-form', 'yup']
        }
      }
    }
  }
})