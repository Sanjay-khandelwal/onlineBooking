import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewBooking() {
  const [form, setForm] = useState({ name: '', email: '', date: '', service: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.service) {
      alert('All fields are required!');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existing, form]));
    navigate('/bookings');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center border-b pb-2 border-cyan-600">
          New Booking
        </h2>

        <div className="space-y-4 text-white">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="text"
            name="service"
            placeholder="Service Type"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-cyan-500/50"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}


