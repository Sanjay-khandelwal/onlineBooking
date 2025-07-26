import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BookingDetails() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    const id = parseInt(bookingId, 10);

    if (!isNaN(id) && id >= 0 && id < data.length) {
      setBooking(data[id]);
    } else {
      setBooking(null);
    }
  }, [bookingId]);

  if (!booking) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black px-4">
        <div className="max-w-md w-full p-6 rounded-lg bg-red-900 text-red-200 border border-red-400 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-2">Booking Not Found</h2>
          <p className="mb-4">This booking does not exist or has been removed.</p>
          <button
            className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
            onClick={() => navigate('/bookings')}
          >
            Back to Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4 py-12">
      <div className="max-w-xl w-full bg-gray-900 border border-gray-700 shadow-lg rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-600 pb-3">
          Booking Details
        </h2>

        <div className="space-y-6">
          <Info label="Name" value={booking.name} />
          <Info label="Email" value={booking.email} />
          <Info label="Date" value={booking.date} />
          <Info label="Service" value={booking.service} />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/bookings')}
            className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition duration-200"
          >
            Back to Bookings
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-semibold">{value || 'N/A'}</p>
    </div>
  );
}



