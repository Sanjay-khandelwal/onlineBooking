// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">About BookingApp</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            BookingApp is a modern booking management tool for small businesses and professionals.
            Effortlessly create, view, and manage your appointments with ease.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect with Us</h3>
          <div className="flex items-center gap-5 text-2xl mt-3">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/@your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} <span className="text-white font-medium">BookingApp</span>. All rights reserved.
      </div>
    </footer>
  );
}
