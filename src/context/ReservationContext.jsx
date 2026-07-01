// src/context/ReservationContext.jsx
import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [currentReservation, setCurrentReservation] = useState(null);

  const createReservation = (data) => {
    const newReservation = {
      id: Date.now(),
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setReservations(prev => [...prev, newReservation]);
    setCurrentReservation(newReservation);
    toast.success('Reservation confirmed! Check your email.');
    return newReservation;
  };

  const updateReservation = (id, data) => {
    setReservations(prev => 
      prev.map(res => res.id === id ? { ...res, ...data } : res)
    );
  };

  const cancelReservation = (id) => {
    setReservations(prev => 
      prev.map(res => res.id === id ? { ...res, status: 'cancelled' } : res)
    );
    toast.success('Reservation cancelled');
  };

  return (
    <ReservationContext.Provider value={{
      reservations,
      currentReservation,
      createReservation,
      updateReservation,
      cancelReservation,
    }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};