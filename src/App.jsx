// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BookingList from './pages/BookingList';
import NewBooking from './pages/NewBooking';

const BookingDetails = lazy(() => import('./pages/BookingDetails'));

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookings" element={<BookingList />} />
          <Route
            path="bookings/:bookingId"
            element={
              <Suspense fallback={<div className="text-center ">Loading booking details...</div>}>
                <BookingDetails />
              </Suspense>
            }
          />
          <Route path="new-booking" element={<NewBooking />} />
        </Route>
      </Routes>
    </div>
  );
}
