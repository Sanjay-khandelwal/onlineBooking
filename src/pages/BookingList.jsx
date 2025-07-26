import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="min-h-screen mt-[100px] px-4 py-6 bg-black text-white flex flex-col items-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b-2 border-cyan-500 pb-2">
        All Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-400 text-sm">No bookings yet.</p>
      ) : (
        <ul className="w-full max-w-md space-y-3">
          {bookings.map((booking, index) => (
            <li
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition rounded-md p-4 shadow-md"
            >
              <Link to={`/bookings/${index}`} className="block text-cyan-300 hover:underline">
                <div className="font-semibold text-lg">{booking.name}</div>
                <div className="text-sm text-gray-400">{booking.date}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
