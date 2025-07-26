import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/thumbnails/014/268/881/original/bonfire-particle-flying-over-black-bg-realistic-bonfire-particle-flying-alpha-channel-closeup-bonfire-sparks-flying-on-screen-use-for-project-fire-embers-and-fire-sparks-flying-animation-free-video.jpg')",
          }}
        ></div>

        <div
          className={`relative z-10 bg-black/80 p-6 sm:p-10 md:p-12 rounded-xl shadow-xl max-w-3xl text-center transition-all duration-1000 ease-in-out transform ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Book Appointments with Ease
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Manage your schedule, get instant confirmations, and never miss a booking again.
          </p>
          <button
            onClick={() => navigate('/bookings')}
            className="text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 bg-gray-400 shadow-md"
          >
            View Bookings
          </button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Step 1: Browse Services</h3>
              <p className="text-gray-300">
                Explore the available appointments and check availability based on your preferences.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Step 2: Book Instantly</h3>
              <p className="text-gray-300">
                Select your time slot and enter your details — confirmation happens in seconds.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Step 3: Manage Easily</h3>
              <p className="text-gray-300">
                Access, update, or cancel your bookings anytime from the dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-12 text-white text-center px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Booking Today!</h2>
          <p className="mb-6 text-blue-100">
            No sign-up needed — just schedule and go.
          </p>
          <button
            onClick={() => navigate('/new-booking')}
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-md"
          >
            Make a New Booking
          </button>
        </div>
      </section>
    </div>
  );
}
